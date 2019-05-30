import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Dashboard from './components/DashBoard'
import ScrollToTop from './components/ScrollTop'
import notFound from './components/NotFound'
import LandingPage from './components/LandingPage';
import Services from './components/services/Services';
import { Authenticate } from './authentication';

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

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = Authenticate()
  return (<Route {...rest} render={(props) => (
    isLoggedIn === true
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  )} />);
}