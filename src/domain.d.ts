import { type Config } from "./config";

declare interface DomainUseCase {
  config: Config;
}

declare interface DomainMapper {
  config: Config;
}
declare interface DomainRepository {
  config: Config;
}

declare interface DomainUseCaseInterface<P, R> {
  execute: (params: P) => R;
}

declare interface DomainMapperInterface<P, R> {
  map: (params: P) => R;
}
