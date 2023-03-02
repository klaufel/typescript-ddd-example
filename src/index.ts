import config from "./config";

import entryPoint from "./domainEntryPoint";
import useCases from "./domainUseCases";

export default entryPoint({ config, useCases });
