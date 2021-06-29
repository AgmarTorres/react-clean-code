import React from 'react'
import Logo from '@/presetation/components/logo/logo'
import Styles from './login-header-styles.scss'
const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>Devs = Enquetes para usuários</h1>
    </header>
  )
}

export default LoginHeader
