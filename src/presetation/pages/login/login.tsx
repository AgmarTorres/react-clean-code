import React, { useState, memo } from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presetation/components'
import Context from '@/presetation/context/form/form-context'
type StateProps ={
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({ isLoading: false, errorMessage: '' })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state} >
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
