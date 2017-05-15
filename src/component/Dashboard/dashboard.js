import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Header from '../Header/header'
import Content from '../Content/content'

class Dashboard extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }
  handleLogout = () => {
    this.props.onSubmit();
  }
  render() {
    console.log('PROPS++>', this.props)
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default Dashboard;
