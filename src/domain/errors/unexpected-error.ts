export class UnexpectorError extends Error {
  constructor () {
    super('Algo de errado aconteceu.')
    this.name = 'UnexpectorError'
  }
}
