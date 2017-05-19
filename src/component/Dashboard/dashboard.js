import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Header from '../Header/header'
import Content from '../Content/content'

class Dashboard extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default Dashboard;
