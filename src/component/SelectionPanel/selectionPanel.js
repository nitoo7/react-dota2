import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Grid, Image, Thumbnail } from 'react-bootstrap';
import './selectionPanel.css'
import { fetchData, fetchHeroInfo, fetchItemsInfo, enableLoader } from '../../action/fetchAction'
import { connect } from 'react-redux'


class LeftPanel extends Component {

  static propTypes = {
    matchesInfo: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  fetchDotaData = (player) => {
    const {dispatch} = this.props
    dispatch(enableLoader());
    if(player == 'baro') {
      dispatch(fetchData("365726232"));
    } else if(player == 'deepak') {
      dispatch(fetchData("148162670"));
    } else if(player == 'kai') {
      dispatch(fetchData("113726618"));
    } else if(player == 'nit') {
      dispatch(fetchData("348480252"));
    } else if(player == 'sana') {
      dispatch(fetchData("373219349"))
    } else if(player == 'altair') {
      dispatch(fetchData("351831800"))
    } else if(player == 'johng') {
      dispatch(fetchData("86718410"))
    }                   
  }

  render() {
    return (
      <div className="selectionPanel">
        <div className="playerInfoBox" onClick={()=>{this.fetchDotaData('baro')}}>
          <img className="playerImg" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg" alt="242x200">
          </img>
          <p>Baro</p>
        </div>
        <div className="playerInfoBox" onClick={()=>{this.fetchDotaData('deepak')}}>
          <img className="playerImg" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/20/20010a0be226aa15f631b66ec7fc2d29a093d3a5_full.jpg" alt="242x200">
          </img>   
          <p>dead_creep</p>
        </div>
        <div className="playerInfoBox" onClick={()=>{this.fetchDotaData('kai')}}>
          <img className="playerImg" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/35/35eaf19450fa8e556052bb981818a80f18f75d93_full.jpg" alt="242x200">
          </img>
          <p>Kai</p>
        </div>
        <div className="playerInfoBox" onClick={()=>{this.fetchDotaData('nit')}}>
          <img className="playerImg" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg" alt="242x200">
          </img>  
          <p>Bad..karma</p>
        </div>
        <div className="playerInfoBox" onClick={()=>{this.fetchDotaData('sana')}}>
          <img className="playerImg" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/97/978287855f109cdb5ae7168dd8625b37b0c0e314_full.jpg" alt="242x200">
          </img>  
          <p>Swamiji</p>
        </div>      
        <div className="playerInfoBox" onClick={()=>{this.fetchDotaData('altair')}}>
          <img className="playerImg" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6dd8ae8d66b6a3021896da24b9f92aa51ccec92a_full.jpg" alt="242x200">
          </img>  
          <p>Altair</p>
        </div>      
        <div className="playerInfoBox" onClick={()=>{this.fetchDotaData('johng')}}>
          <img className="playerImg" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/58/58c2360af9d6e98ddfb0bea692920f84078f24cf_full.jpg" alt="242x200">
          </img>  
          <p>acidblue</p>
        </div>                 
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  matchesInfo: state.fetch.matchesInfo,
  playerInfo: state.fetch.playerInfo,
  heroInfo: state.fetch.heroInfo,
  itemsInfo: state.fetch.itemsInfo
})

export default connect(
  mapStateToProps
)(LeftPanel)
