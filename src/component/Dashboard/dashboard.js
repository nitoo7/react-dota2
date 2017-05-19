import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Header from '../Header/header'
import Content from '../Content/content'
import Selection from '../SelectionPanel/selectionPanel'
import './dashboard.css'

class Dashboard extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Selection />
        <Content />
      </div>
    );
  }
}

export default Dashboard;
