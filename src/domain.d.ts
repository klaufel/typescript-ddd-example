import { type Config } from "./config";

declare interface DomainUseCase {
  config?: Config;
}

declare interface DomainRepository {
  config?: Config;
}
