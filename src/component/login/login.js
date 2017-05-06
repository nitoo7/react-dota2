import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './login.css'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldEmptyError: false,
      errorMessage: ''
    }
  }
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  handleLogin = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if(username === '' || password === '') {
      this.setState({
        fieldEmptyError: true,
        errorMessage: 'Some fields are empty'
      });
      return '';
    }
    this.props.onSubmit(username, password);
  }
  componentDidMount() {
    if(this.props.isLoggedIn) {
       this.props.history.push('/dashboard')
    }
  }
  componentWillReceiveProps(nextProp) {
    if(nextProp.isLoggedIn) {
      this.props.history.push('/dashboard')
    } else {
      this.setState({
        fieldEmptyError: true,
        errorMessage: 'Invalid User credentials'
      })
    }
  }
  render() {
    return (
      <div className="login-page">
        <input className="input-field" type="username" ref="username" name="username"/>
        <input className="input-field" type="password" ref="password" name="password"/>
        <button type="button" onClick={this.handleLogin}>Login</button>
        {this.state.fieldEmptyError ? (<span>{this.state.errorMessage}</span>) : ''}
      </div>
    );
  }
}
