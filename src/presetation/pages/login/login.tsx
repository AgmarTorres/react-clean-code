import React, { useState, memo, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presetation/components'
import Context from '@/presetation/context/form/form-context'
import { Validation } from '../../protocols/validation'

type LoginProps ={
  validation: Validation
}

const Login: React.FC<LoginProps> = ({ validation }: LoginProps) => {
  const [state, setState] = useState({ isLoading: false, emailError: '', passwordError: '', mainError: '', email: '', password: '' })

  useEffect(() => {
    setState({ ...state, emailError: validation.validade('email', state.email), passwordError: validation.validade('password', state.password) })
  }, [state.email, state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }} >
        <form className={Styles.form}>
          <h2> Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-email" />
          <Input type="password" name="password" placeholder="Digite sua password" />
          <button className={Styles.submit} data-testid="submit" disabled={!!state.emailError || !!state.passwordError} type="button">Entrar</button>
          <span className={Styles.link}> Criar Conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default memo(Login)
