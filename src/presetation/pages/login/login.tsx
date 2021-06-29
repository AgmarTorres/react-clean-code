import React, { memo } from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presetation/components'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2> Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-email" />
        <Input type="password" name="password" placeholder="Digite sua password" />
        <button className={Styles.submit} type="button">Entrar</button>
        <span className={Styles.link}> Criar Conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default memo(Login)
