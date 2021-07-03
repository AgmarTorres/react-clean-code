import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors'

describe('Email Vaslidation', () => {
  test('should  return error if email is invalid', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate('email')
    expect(error).toStrictEqual(new InvalidFieldError())
  })
})
