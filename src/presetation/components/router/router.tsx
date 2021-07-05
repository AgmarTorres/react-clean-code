import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Login } from '@/presetation/pages'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={makeLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
