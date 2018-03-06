import React from 'react'
import { Switch, Route } from 'react-router';
import Home from '../Landing/Home'
// import LoginContainer from '../Landing/LoginContainer'
// import SignUpContainer from '../Landing/SignUpContainer'
import SignUpLoginContainer from '../Landing/SignUpLoginContainer'

class LandingContainer extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/:signUpLogin"
            component={SignUpLoginContainer}
          />
          <Route 
            exact path="/"
            component={Home}
            />
        </Switch>
      </div>
    )
  }
}

export default LandingContainer