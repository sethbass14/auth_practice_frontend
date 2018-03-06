// import React from 'react'
// import UserInput from './UserInput'
// 
// class SignUpContainer extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       username: '',
//       password: '',
//     }
//   }
// 
//   handleChange = (event) => {
//     // debugger
//     this.setState({
//       ...this.state,
//       [event.target.name]: event.target.value
//     })
//   }
// 
//   handleSubmit = (event) => {
//     event.preventDefault()
//     console.log(this.state)
//   }
// 
//   render() {
//     return (
//       <div>
//         <h2>Sign Up</h2>
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <UserInput 
//               username={this.state.username}
//               password={this.state.password}
//               handleChange={this.handleChange} />
//             <input type="submit"/>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

export default SignUpContainer