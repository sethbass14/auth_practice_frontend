import React from 'react'
import {  withRouter } from 'react-router-dom'
import UserInput from './UserInput'

class SignUpLoginContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      signup: false,
      login: false,
      fields: {
        username: '',
        password: ''
      }
    }
  }
  
  componentDidMount() {
    const page = this.props.match.params.signUpLogin
    this.setState({
      ...this.state,
      [this.props.match.params.signUpLogin]: !this.state[page]
    })
  }
  
  handleChange = (event) => {
    // debugger
    this.setState({
      ...this.state,
      fields:{
        ...this.state.fields,
        [event.target.name]: event.target.value
      }
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
  }
  
  render() {
    return (
      <div>
        {this.state.signup  ? <h2>Sign Up</h2> : <h2>Login</h2>}
        <div>
          <form onSubmit={this.handleSubmit}>
            <UserInput 
              username={this.state.username}
              password={this.state.password}
              handleChange={this.handleChange} />
            <input type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUpLoginContainer)