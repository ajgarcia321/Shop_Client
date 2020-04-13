import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NewUser from './components/NewUser.js'
import Login from './components/Login.js'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showNew: false,
      showLogIn: false,
      token: '',
      username: '',
      userId: 0,
      userInfo: []
    }
  }
  showNew = () => {
    this.setState({ showNew: !this.state.showNew})
  }
  updateToken = (token) => {
    this.setState({ token: token })
  }
  updateUserId = (id) => {
    this.setState({ userId: id})
  }
  welcomeUser = (username) => {
    this.setState({ username: username})
  }
  getUserInfo = async () => {
    let response = await fetch(`http://localhost:3000/users/${this.state.userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json, application/x-www-form-urlencoded',
        'Authorization': `Bearer ${this.state.token}`
      }
    })
    const userStats = await response.json()
    this.setState({ userInfo: [userStats.site_outputs, ...this.state.userInfo ]})
  }
  handleUpdate = (id) => {
    const userInfo = this.state.userInfo[0].filter(output => output.id !== id)
    this.state.userInfo.pop()
    console.log(userInfo)
    this.setState({
        userInfo: [userInfo, ...this.state.userInfo]
    })

    console.log(this.state.userInfo)
  }
  render() {
    return (
        <Router>
        <div className="">
        {this.state.showNew ?
            <NewUser
            showNew={this.state.showNew}
            funcShowNew={this.showNew}
            />
          : <button className="" onClick={this.showNew}>Sign Up</button>
        }
        {this.state.username ?
          <>
          <p>Welcome {this.state.username}</p>
          </>
          :
          <div>
          <a href="/login"><button>Log In</button></a>
          <Route exact path="/login" component=
            {() => (<Login
              updateToken={this.updateToken}
              welcomeUser={this.welcomeUser}
              updateUserId={this.updateUserId}
            />) }
          />
          </div>
        }
        </div>
        </Router>
    )
  }
}
