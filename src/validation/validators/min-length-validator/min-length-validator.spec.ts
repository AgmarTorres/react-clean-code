import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validator'

describe('MinLengthValidation', () => {
  test('Shoul return error if value is invalid ', () => {
    const sut = new MinLengthValidation('password', 7)
    const error = sut.validate('123798')
    expect(error).toEqual(new InvalidFieldError())
  })
})
