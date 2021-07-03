import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validator'
import faker from 'faker'

const makeSut = (): MinLengthValidation => new MinLengthValidation(faker.database.column(), 7)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid ', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(6))
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if value is empty ', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toBeFalsy()
  })

  test('Should return falsy if value is valid ', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(7))
    expect(error).toBeFalsy()
  })
})
