import * as api from "./api";
import * as routes from "./routes";

const config = {
  ...api,
  routes,
} as const;

export type Config = typeof config;

export default config;
