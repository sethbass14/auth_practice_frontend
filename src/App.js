import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import NavBarLanding from './navbars/NavBarLanding'

class App extends Component {
  render() {
    return (
      <div>
        <NavBarLanding />
        <MainContainer />
      </div>
    );
  }
}

export default App;
