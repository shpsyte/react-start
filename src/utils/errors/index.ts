export type TypeError = {
  status: number
  code: number
  message: string
  details: string
  validationErrors: any
}

export class BaseError extends Error {
  code: number
  details: string
  status: number
  validationErrors: any
  constructor({
    code = 0,
    status = 0,
    message = '',
    details = '',
    validationErrors = '',
  }: TypeError) {
    super(message)
    this.name = this.constructor.name
    this.code = code || 0
    this.message = message
    this.details = details
    this.status = status || 500
    this.validationErrors = validationErrors || ''
  }
}

export class InternalServerError extends BaseError {
  constructor({ message, status }: TypeError) {
    super({
      message: message || 'Internal Error.',
      status: status || 500,
      code: 0,
      details: '',
      validationErrors: '',
    })
  }
}

export class UnauthorizedError extends BaseError {
  constructor({ message, status, details, validationErrors }: TypeError) {
    super({
      message: message || 'Current user did not login to the application.',
      status: status || 401,
      code: 0,
      details: details || '',
      validationErrors: validationErrors || '',
    })
  }
}
