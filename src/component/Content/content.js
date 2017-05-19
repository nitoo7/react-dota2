import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
import DetailsPanel from '../DetailsPanel/detailsPanel';
import './content.css'
class Content extends Component {
  render() {
    return (
      <div className="content">
        <DetailsPanel />
      </div>
    );
  }
}

export default Content;
