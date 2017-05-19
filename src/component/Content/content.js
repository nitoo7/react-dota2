import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
import LeftPanel from '../LeftPanel/leftPanel';
import RightPanel from '../RightPanel/rightPanel';
import './content.css'
class Content extends Component {
  render() {
    return (
      <Row className="content">
        <LeftPanel />
        <RightPanel />
      </Row>
    );
  }
}

export default Content;
