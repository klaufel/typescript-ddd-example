import { type Config } from "./config";

import { type UseCases } from "./domainUseCases";

const createNotImplementedUseCase = (useCase: string) => {
  return {
    execute: (): Promise<void> => {
      return Promise.resolve(
        console.warn(
          `[typescript-ddd-example] - Use case #${useCase} is not implemented of the domain`
        )
      );
    },
  };
};

interface DomainEntryPoint {
  config: Config;
  useCases: UseCases;
}

export default function domainEntryPoint({
  config,
  useCases,
}: DomainEntryPoint): {
  get: (useCase: keyof typeof useCases) => {
    execute: (params?: unknown) => void;
  };
} {
  return {
    get: (useCase: keyof typeof useCases) => {
      const useCaseEntryPoint = useCases[useCase];

      if (typeof useCase === "undefined") createNotImplementedUseCase(useCase);

      const [loader] = [useCaseEntryPoint];

      const getMethod = (factory) => factory.default;

      return loader === undefined
        ? createNotImplementedUseCase(useCase)
        : {
            execute: (params?: unknown) => {
              return loader()
                .then((factory) =>
                  getMethod(factory)({ config }).execute(params)
                )
                .catch((e) => Promise.reject(e));
            },
          };
    },
  };
}
