import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Table } from 'react-bootstrap';
import './rightPanel.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
class RightPanel extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  handleLogout = () => {
    this.props.onSubmit();
  }
  
  
  render() {
    var matches = [{
        "account_id": 367340556,
        "player_slot": 0,
        "hero_id": 41,
        "item_0": 63,
        "item_1": 46,
        "item_2": 147,
        "item_3": 81,
        "item_4": 0,
        "item_5": 158,
        "backpack_0": 0,
        "backpack_1": 0,
        "backpack_2": 0,
        "kills": 7,
        "deaths": 5,
        "assists": 11,
        "leaver_status": 0,
        "last_hits": 201,
        "denies": 7,
        "gold_per_min": 589,
        "xp_per_min": 638,
        "level": 23,
        "hero_damage": 9420,
        "tower_damage": 8594,
        "hero_healing": 303,
        "gold": 3442,
        "gold_spent": 17930,
        "scaled_hero_damage": 7940,
        "scaled_tower_damage": 6200,
        "scaled_hero_healing": 92,
      }, {
        "account_id": 4294967295,
        "player_slot": 1,
        "hero_id": 57,
        "item_0": 102,
        "item_1": 0,
        "item_2": 46,
        "item_3": 180,
        "item_4": 121,
        "item_5": 37,
        "backpack_0": 0,
        "backpack_1": 0,
        "backpack_2": 0,
        "kills": 4,
        "deaths": 3,
        "assists": 13,
        "leaver_status": 0,
        "last_hits": 61,
        "denies": 4,
        "gold_per_min": 380,
        "xp_per_min": 586,
        "level": 22,
        "hero_damage": 6957,
        "tower_damage": 660,
        "hero_healing": 6410,
        "gold": 2126,
        "gold_spent": 12295,
        "scaled_hero_damage": 5215,
        "scaled_tower_damage": 494,
        "scaled_hero_healing": 3913,
      }];
    return (
      <Col xs={9}>
  <Table striped bordered condensed>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
      </Col>
    );
  }
}

export default RightPanel;


      // <BootstrapTable data={ matches }>
      //     <TableHeaderColumn dataField='hero_id' isKey>Hero</TableHeaderColumn>
      //     <TableHeaderColumn dataField='kills'>Kills</TableHeaderColumn>
      //     <TableHeaderColumn dataField='deaths'>Deaths</TableHeaderColumn>
      //     <TableHeaderColumn dataField='assists'>Assists</TableHeaderColumn>
      //     <TableHeaderColumn dataField='level'>Level</TableHeaderColumn>       
      //     <TableHeaderColumn dataField='gold_per_min'>GPM</TableHeaderColumn>                       
      // </BootstrapTable>
