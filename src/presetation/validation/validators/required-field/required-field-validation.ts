import { FieldValidation } from '@/presetation/validation/protocols/field-validation'
import { RequiredFieldError } from '../../errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (value: string): Error {
    return value ? null : new RequiredFieldError()
  }
}
