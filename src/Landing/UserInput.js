import React from 'react';

class UserInput extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <label>Username</label>
        <input 
          type="text" value={this.props.username}
          name="username"
          placeholder="username"
          onChange={this.props.handleChange}
          />
        <br></br>
        <label>Password</label>
        <input 
          type="text" 
          value={this.props.password}
          name="password"
          placeholder="username"
          onChange={this.props.handleChange}
          />
      </div>
      
    )
  }
}

export default UserInput