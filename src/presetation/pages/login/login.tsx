import React, { useState, memo, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presetation/components'
import Context from '@/presetation/context/form/form-context'
import { Validation } from '../../protocols/validation'
import { Authentication } from '@/domain/usecases'

type LoginProps ={
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<LoginProps> = ({ validation, authentication }: LoginProps) => {
  const [state, setState] = useState({ isLoading: false, emailError: '', passwordError: '', mainError: '', email: '', password: '' })

  useEffect(() => {
    setState({ ...state, emailError: validation.validade('email', state.email), passwordError: validation.validade('password', state.password) })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise< void > => {
    event.preventDefault()
    if (state.isLoading || state.emailError || state.passwordError) return
    setState({ ...state, isLoading: true })
    try {
      await authentication.auth({ email: state.email, password: state.password })
    } catch (error) {
      setState({ ...state, isLoading: false, mainError: error.message })
    }
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }} >
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2> Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-email" />
          <Input type="password" name="password" placeholder="Digite sua password" />
          <button className={Styles.submit} data-testid="submit" disabled={!!state.emailError || !!state.passwordError} type="submit" >Entrar</button>
          <span className={Styles.link}> Criar Conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default memo(Login)
