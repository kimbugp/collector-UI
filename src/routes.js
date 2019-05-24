import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Dashboard from './components/DashBoard'
import ScrollToTop from './components/ScrollTop'
import notFound from './components/NotFound'
import LandingPage from './components/LandingPage';
import Services from './components/services/Services';

export default props => (
  <BrowserRouter >
    <ScrollToTop>
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={LandingPage} />
        <PrivateRoute path='/services' component={Services} />
        <Route component={notFound} exact strict />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  )} />
)

export const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
  },
  signout(cb) {
    this.isAuthenticated = false
  }
}