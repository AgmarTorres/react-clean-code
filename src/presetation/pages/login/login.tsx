import React, { memo } from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presetation/components/spinner/spinner'
import LoginHeader from '@/presetation/components/login-header/login-header'
import Footer from '@/presetation/components/footer/footer'
import Input from '@/presetation/components/input/input'

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
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error} >  Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default memo(Login)
