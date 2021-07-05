import React from 'react'
import { Login } from '@/presetation/pages'
import { makeRemoteAuthentication } from './../../../usecases/authentication/remote-authentication-factory/remote-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login authentication ={makeRemoteAuthentication()} validation={makeLoginValidation()} />
  )
}
