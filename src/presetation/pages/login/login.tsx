import React, { useState, memo, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presetation/components'
import Context from '@/presetation/context/form/form-context'
import { Validation } from './../../validation'

type LoginProps ={
  validation: Validation
}

const Login: React.FC<LoginProps> = ({ validation }: LoginProps) => {
  const [state, setState] = useState({ isLoading: false, emailError: 'Campo obrigatório', passwordError: 'Campo obrigatório', mainError: '', email: '', password: '' })

  useEffect(() => { validation.validade({ email: state.email }) }, [state.email])
  useEffect(() => { validation.validade({ password: state.password }) }, [state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }} >
        <form className={Styles.form}>
          <h2> Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-email" />
          <Input type="password" name="password" placeholder="Digite sua password" />
          <button className={Styles.submit} data-testid="submit" disabled type="button">Entrar</button>
          <span className={Styles.link}> Criar Conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default memo(Login)
