import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Login } from '@/presetation/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
