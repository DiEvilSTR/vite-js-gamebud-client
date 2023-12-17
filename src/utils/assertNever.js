import { log } from './log';

export function assertNever(x, namespace) {
  const warning = `Unexpected value: ${x}`;
  const message = namespace ? `[${namespace}] ${warning}` : warning;
  log.error(message);
}
