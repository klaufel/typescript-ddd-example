import * as api from "./api";

const config = {
  ...api,
};

export type Config = typeof config;

export default config;
