import React from 'react'
import UserInput from './UserInput'

class LoginContainer extends React.Component {
  

  render() {
    return (
      <div>
        <h2>Login</h2>
        <div>
          <form>
            <UserInput/>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginContainer