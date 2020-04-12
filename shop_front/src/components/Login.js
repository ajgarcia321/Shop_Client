import React from 'react'
import Axios from 'axios'


export default class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.authorization(this.state)
  }
  authorization = async (userInfo) => {
    let response = await Axios.post('http://localhost:3000/users/login', userInfo)
    console.log(response)
    if (response.data.token) {
      this.props.updateToken(response.data.token)
      this.props.welcomeUser(response.data.user.username)
      this.props.updateUserId(response.data.user.id)
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value})
  }

  redmer(){
      return(
        <div>
            <div style={formDivStyle}>
            <h1>Log In</h1>
            <form class="ui form" onSubmit={handleSubmit}>
                <div class="field">
                    <label>Username</label>
                    <input value={username} onChange={handleChange} type="username" placeholder="username"/>
                </div>
                <div class="field">
                    <label>Password</label>
                    <input value={password} onChange={handleChange} type="password" placeholder="password"/>
                </div>

                <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}
}

export default LoginForm
