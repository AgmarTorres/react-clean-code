import { FieldValidationSpy } from '../test/mock-validation-composite'
import { ValidationComposiste } from './validation-composite'
import { RenderResult } from '@testing-library/react'

type SutTypes = {
  sut: ValidationComposiste
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (): SutTypes => {
  const fieldValidationsSpy = [new FieldValidationSpy('any_field'), new FieldValidationSpy('any_field')]
  const sut = new ValidationComposiste(fieldValidationsSpy)
  return { sut, fieldValidationsSpy }
}

describe('Validation Composite', () => {
  test('should return error if any validation fails', () => {
    const { fieldValidationsSpy, sut } = makeSut()
    fieldValidationsSpy[0].error = new Error('first_error_message')
    fieldValidationsSpy[1].error = new Error('second_error_message')
    const error = sut.validade('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
