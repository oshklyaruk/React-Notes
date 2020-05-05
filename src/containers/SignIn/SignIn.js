import React from 'react';
import './SignIn.sass';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";


class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      error: false
    }
  }

  handleUsernameChange = ({target}) => {
    this.setState({
      username: target.value
    });
  };

  handlePasswordChange = ({target}) => {
    this.setState({
      password: target.value
    });
  };

  handleSignIn = () => {
    const {username, password} = this.state;
    if (password.trim().length === 0 || username.trim().length === 0) {
      this.setState({
        error: true
      })
      return
    }

    this.props.history.push("/list")

  }

  render() {
    const {username, password, error} = this.state

    return (
      <div className="sign-in">
        <div className="sign-in-form">
        <h1>Sign In</h1>
        <Input onChange={this.handleUsernameChange} value={username} style={{ marginBottom: "10px"}}/>
        <Input type="password" onChange={this.handlePasswordChange} value={password} style={{ marginBottom: "10px"}}/>
        {
          error
            ? <span className="error">Both fields should be filled</span>
            : null
        }
        <Button onClick={this.handleSignIn}>Sign in</Button>
      </div>
      </div>
    )
  }
}

export default SignIn
