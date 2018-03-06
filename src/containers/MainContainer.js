import React from 'react'
import { Switch, Route } from 'react-router';
import LandingContainer from './LandingContainer';


class MainContainer extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <Switch>
          <Route 
            path = "/"
            component = {LandingContainer}  
            />
        </Switch>
      </div>
    )
  }
}

export default MainContainer