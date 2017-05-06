import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
import './rightPanel.css'
class RightPanel extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  handleLogout = () => {
    this.props.onSubmit();
  }
  render() {
    return (
      <Col xs={9}>
        <div className="matchInfoBox">Match....1</div>
        <div className="matchInfoBox">match.......2</div>
        <div className="matchInfoBox">match.....3</div>
        <div className="matchInfoBox">match.....4</div>
        <div className="matchInfoBox">match......5</div>
      </Col>
    );
  }
}

export default RightPanel;
