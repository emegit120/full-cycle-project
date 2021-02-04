export class InvalidParamError extends Error {
  constructor(paramName: string) {
    super(`Inválido o campo: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
