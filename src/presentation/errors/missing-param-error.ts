export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`Sem o campo: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
