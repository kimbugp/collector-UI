import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Dashboard from './components/DashBoard'
import ScrollToTop from './components/ScrollTop'
import notFound from './components/NotFound'

export default props => (
  <BrowserRouter >
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route component ={notFound} exact strict />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  )