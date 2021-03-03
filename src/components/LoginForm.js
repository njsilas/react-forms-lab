import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  unamechange = event => {
    this.setState({
      username: event.target.value
    })
  }
  passchange = event => {
    this.setState({
      password: event.target.value
    })
  }
  submitDat = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }
  render() {
    return (
      <form onSubmit={this.submitDat}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.unamechange} name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" onChange={this.passchange} type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
