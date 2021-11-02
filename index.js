import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    requestToken: '',
  }

    const {history} = this.props
    history.replace('/')
  }

  //   onSubmitSuccess = () => {
  //     const {history} = this.props
  //     history.replace('/')
  //   }

  submitForm = async event => {
    const {requestToken} = this.state
    event.preventDefault()

    // const {username, password, requestToken} = this.state
    // const userDetails = {username, password, requestToken}
    // const url =
    //   'https://api.themoviedb.org/3/movie/550?api_key=c8ca171bf30d57184cb4565966e59b63'
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify({userDetails}),
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // }
    const url =
      'https://api.themoviedb.org/3/authentication/token/new?api_key=c8ca171bf30d57184cb4565966e59b63'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const updatedData = data.request_token
    console.log(response)
    if (response.ok === 'true') {
      //   alert('login')
      this.onSubmitSuccess()
      this.setState({request      //   alert('response')
    }
    console.log(updatedData)

    const baseUrl =
      'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=c8ca171bf30d57184cb4565966e59b63'

    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: 'apple',
        password: 'raj123',
        request_token: 'f6b75ab7eef199f707f891c3d848465c6b553eeb',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }
    const responses = await fetch(baseUrl, options)
    const datas = await responses.json()
    console.log(datas)
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {requestToken} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
