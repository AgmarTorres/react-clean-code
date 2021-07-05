import { FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFieldError } from '@/validation/errors'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}
  validate (value: string): Error {
    return !value || value.length > 4 ? null : new InvalidFieldError()
  }
}
