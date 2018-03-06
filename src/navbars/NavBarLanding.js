import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';

const NavBarLanding = props => {
  return (
    <div className='ui menu nav'>
      <div className='item'>
        <h1>Chuck Auth Jokes</h1>
      </div>
    </div>
  )
}

export default NavBarLanding