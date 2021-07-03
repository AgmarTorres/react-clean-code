import { Validation } from '@/presetation/protocols/validation'
import { FieldValidation } from '@/validation/protocols/field-validation'
export class ValidationComposiste implements Validation {
  constructor (private readonly validatiors: FieldValidation[]) {}
  validade (fieldName: string, fieldValue: string): string {
    const validators = this.validatiors.filter(v => v.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate(fieldValue)
      if (error) {
        return error.message
      }
    }
    return ''
  }
}
