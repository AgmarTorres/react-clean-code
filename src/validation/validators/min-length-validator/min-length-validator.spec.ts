import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validator'

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid ', () => {
    const sut = new MinLengthValidation('password', 7)
    const error = sut.validate('123798')
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if value is valid ', () => {
    const sut = new MinLengthValidation('password', 7)
    const error = sut.validate('12379800')
    expect(error).toBeFalsy()
  })
})
