import debug from "debug";
import { name } from "../../package.json"; // automatically set logger namespace to package.json name

export const LOGGER_NAMESPACE = name;

const logger = debug(LOGGER_NAMESPACE);

export const trace = (namespace: string) => logger.extend(`trace:${namespace}`);
export const info = (namespace: string) => logger.extend(`info:${namespace}`);
export const error = (namespace: string) => logger.extend(`error:${namespace}`);

export const getLogger = (namespace: string) => ({
  trace: trace(namespace),
  info: info(namespace),
  error: error(namespace),
});
