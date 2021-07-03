import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

describe('Email Vaslidation', () => {
  test('should  return error if email is invalid', () => {
    const sut = new EmailValidation(faker.random.words())
    const error = sut.validate(faker.random.word())
    expect(error).toStrictEqual(new InvalidFieldError())
  })

  test('should  return falsy if email is valid', () => {
    const sut = new EmailValidation(faker.random.words())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
