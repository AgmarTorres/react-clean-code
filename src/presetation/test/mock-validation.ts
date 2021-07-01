import { Validation } from '@/presetation/protocols/validation'

export class ValidationSpy implements Validation {
  erroMessage: string
  fieldName: string
  fieldValue: string

  validade (fieldName: string, fieldValue: string): string {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.erroMessage
  }
}
