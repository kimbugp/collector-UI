import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Dashboard from './components/DashBoard'
import ScrollToTop from './components/ScrollTop'
import notFound from './components/NotFound'
import LandingPage from './components/LandingPage';
import Services from './components/services/Services';
import { Authenticate, authentication } from './authentication';

export default props => (
  <BrowserRouter >
    <ScrollToTop>
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard} roles={[]}/>
        <Route exact path='/' component={LandingPage} />
        <PrivateRoute path='/services' component={Services} roles={['is_admin', 'is_staff']} />
        <Route component={notFound} exact strict />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)

export const PrivateRoute = ({ component: Component, roles = [], ...rest }) => (
  <Route {...rest} render={props => {
    const isLoggedIn = Authenticate()
    if (isLoggedIn === false) {
      authentication.signout()
      return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }
    let values = roles.map(value => (isLoggedIn[value]))
    if (values.len>0 &&values.every(x => x === true)) {
      return <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
    }
    return <Component {...props} />
  }} />
)