import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Grid } from 'react-bootstrap';
import './leftPanel.css'
class LeftPanel extends Component {
  render() {
    return (
      <Col xs={3}>
       
        <div className="playerInfoBox" onClick="">
        Player...1
        </div>
        <div className="playerInfoBox">
        Player...2
        </div>
        
      </Col>
    );
  }
}

export default LeftPanel;
