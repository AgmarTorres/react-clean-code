import { FieldValidationSpy } from '../test/mock-validation-composite'
import { ValidationComposiste } from './validation-composite'

describe('Validation Composite', () => {
  test('should return error if any validation fails', () => {
    const fieldValidationSpy = new FieldValidationSpy('any_field')
    fieldValidationSpy.error = new Error('first_error_message')
    const fieldValidationSpy2 = new FieldValidationSpy('any_field')
    fieldValidationSpy.error = new Error('any_error_message')
    const sut = new ValidationComposiste([
      fieldValidationSpy,
      fieldValidationSpy2
    ])
    const error = sut.validade('any_field', 'any_value')
    expect(error).toBe('any_error_message')
  })
})
