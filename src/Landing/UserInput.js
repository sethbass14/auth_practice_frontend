import React from 'react';

const UserInput = props => {
  return (
    <div>
      <label>Username</label>
      <input 
        type="text" value={props.username}
        name="username"
        placeholder="username"
        onChange={props.handleChange}
        />
      <br></br>
      <label>Password</label>
      <input 
        type="text" 
        value={props.password}
        name="password"
        placeholder="username"
        onChange={props.handleChange}
        />
    </div>  
  )  
}

export default UserInput