import { type Config } from "./config";

import { type UseCases } from "./domainUseCases";

interface DomainEntryPoint {
  config: Config;
  useCases: UseCases;
}

type DomainSubscribersParams = {
  error: Error | string | null;
  params: any;
  result: any;
};

type DomainSuscribersCallback = (params: DomainSubscribersParams) => void;

type DomainSuscribers<U extends string> = Record<U, ((param?: any) => any)[]>;

const createNotImplementedUseCase = (useCase: string) => {
  return {
    execute: (): Promise<any> => {
      return Promise.resolve(
        console.warn(
          `@domain - Use case #${useCase} is not implemented of the domain`
        )
      );
    },
    subscribe: () => {
      console.warn(
        `@domain - Use case #${useCase} is not implemented of the domain`
      );

      return {
        unsubscribe: () => {
          console.warn(
            `@domain - Use case #${useCase} is not implemented of the domain`
          );
        },
      };
    },
  };
};

export default function domainEntryPoint({
  config,
  useCases,
}: DomainEntryPoint): {
  get: (useCase: keyof typeof useCases) => {
    execute: (params?: unknown) => any;
    subscribe: (callback: DomainSuscribersCallback) => {
      unsubscribe: () => void;
    };
  };
} {
  const subscribers = {} as DomainSuscribers<keyof typeof useCases>;

  return {
    get: (useCase: keyof typeof useCases) => {
      const useCaseEntryPoint = useCases[useCase];

      if (typeof useCase === "undefined") createNotImplementedUseCase(useCase);

      const [loader] = [useCaseEntryPoint];

      const getMethod = (factory: any) => factory.default;

      return loader === undefined
        ? createNotImplementedUseCase(useCase)
        : {
            execute: (params?: unknown) => {
              const subscriptionsForUseCase = subscribers[useCase] || [];
              return loader()
                .then((factory) =>
                  getMethod(factory)({ config }).execute(params)
                )
                .then((result) => {
                  subscriptionsForUseCase.forEach(
                    (callback: DomainSuscribersCallback) => {
                      return callback({ error: null, params, result });
                    }
                  );
                  return result;
                })
                .catch((e) => {
                  subscriptionsForUseCase.forEach(
                    (callback: DomainSuscribersCallback) => {
                      return callback({ error: e, params, result: null });
                    }
                  );
                  return Promise.reject(e);
                });
            },
            subscribe: (callback: DomainSuscribersCallback) => {
              subscribers[useCase] = subscribers[useCase] || [];
              subscribers[useCase].push(callback);

              return {
                unsubscribe: () => {
                  subscribers[useCase] = subscribers[useCase].filter(
                    (suscriberCallback: DomainSuscribersCallback) => {
                      return suscriberCallback !== callback;
                    }
                  );
                },
              };
            },
          };
    },
  };
}
