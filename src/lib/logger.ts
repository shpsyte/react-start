/* eslint-disable no-console */
import pino from 'pino'

import { AppConsts } from '@/utils/const'

const { appEnviroment, appShowLogger } = AppConsts

function getLogger() {
  if (['preview', 'production', 'development'].includes(appEnviroment)) {
    const pinoLogger = pino({
      browser: {
        asObject: true,
        transmit: {
          level: 'info',
          send: function (_level, _logEvent) {
            // send _logEvent to data-log
            // if (_logEvent.level.value >= 40) {
            // console.error('ERROR!:', _logEvent)
            // }
          },
        },
      },
      base: {
        environment: appEnviroment,
      },
    })

    return pinoLogger
  }

  if (appShowLogger) {
    const consoleLogger = {
      trace: console.trace,
      debug: console.debug,
      warn: console.warn,
      error: console.error,
      fatal: console.error,
      info: console.info,
    }

    return consoleLogger
  }
}

export const logger = getLogger() || {
  trace: () => {},
  debug: () => {},
  warn: () => {},
  error: () => {},
  fatal: () => {},
  info: () => {},
}
