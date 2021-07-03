import { FieldValidationSpy } from '../test/mock-validation-composite'
import { ValidationComposiste } from './validation-composite'
import faker from 'faker'

type SutTypes = {
  sut: ValidationComposiste
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = [new FieldValidationSpy(fieldName), new FieldValidationSpy(fieldName)]
  const sut = new ValidationComposiste(fieldValidationsSpy)
  return { sut, fieldValidationsSpy }
}

describe('Validation Composite', () => {
  test('should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { fieldValidationsSpy, sut } = makeSut(fieldName)
    const errorMessage = faker.random.words()
    fieldValidationsSpy[0].error = new Error(errorMessage)
    fieldValidationsSpy[1].error = new Error(faker.random.words())
    const error = sut.validade(fieldName, faker.random.words())
    expect(error).toBe(errorMessage)
  })

  test('should not return  ', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validade('any_field', 'any_field')
    expect(error).toBeFalsy()
  })
})
