import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Table } from 'react-bootstrap';
import './detailsPanel.css'
import { fetchData, fetchHeroInfo, fetchItemsInfo } from '../../action/fetchAction'
import { connect } from 'react-redux'
import PlayerInfo from '../PlayerInfo/playerInfo'

class DetailsPanel extends Component {
  static propTypes = {
    matchesInfo: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  
  fetchDotaData = () => {
    const {dispatch} = this.props
    dispatch(fetchData("365726232"));
    dispatch(fetchHeroInfo());
    dispatch(fetchItemsInfo());
  }
  
  componentWillMount() {
    this.fetchDotaData();
  }
  
  render() {
    return (
      <div className="match table-responsive">
        {
          this.props.loader ? <div className="loader"></div> : <PlayerInfo />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  matchesInfo: state.fetch.matchesInfo,
  playerInfo: state.fetch.playerInfo,
  heroInfo: state.fetch.heroInfo,
  itemsInfo: state.fetch.itemsInfo,
  loader: state.fetch.loader,
})

export default connect(
  mapStateToProps
)(DetailsPanel)


