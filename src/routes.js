import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Dashboard from './components/DashBoard'
import ScrollToTop from './components/ScrollTop'
import notFound from './components/NotFound'
import LandingPage from './components/LandingPage';

export default props => (
  <BrowserRouter >
      <ScrollToTop>
        <Switch>
          <Route exact path='/dashboard' component={ Dashboard } />
          <Route exact path='/' component={LandingPage } />
          <Route component ={notFound} exact strict />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  )