import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import { EmailValidation } from '../../email-validation/email-validation'
import { MinLengthValidation } from '../../min-length-validator/min-length-validator'
import { ValidationBuilder as sut } from './validation-builder'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('should return EmailValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number({
      min: 1,
      max: 5
    })
    const validations = sut.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  test('should return list of validations', () => {
    const field = faker.database.column()
    const length = faker.datatype.number({
      min: 1,
      max: 5
    })
    const validations = sut.field(field).required().email().min(length).build()
    expect(validations).toEqual([new RequiredFieldValidation(field), new EmailValidation(field), new MinLengthValidation(field, length)])
  })
})
