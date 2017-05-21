import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Table } from 'react-bootstrap';
import './matchInfo.css'
import { fetchData, fetchHeroInfo, fetchItemsInfo, showMatchInfoPage, closeMatchInfoPage } from '../../action/fetchAction'
import { connect } from 'react-redux'

class MatchInfo extends Component {
  static propTypes = {
    matchesInfo: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  
  showMatchInfo = (index) => {
    const {dispatch} = this.props
    dispatch(showMatchInfoPage());
  }
  
  closeMatchInfo = () => {
    const {dispatch} = this.props
    dispatch(closeMatchInfoPage());  }
  
  getPlayerName = (accountId) => {
      switch (accountId) {
        case 365726232:
            return "Baro"
        case 148162670:
            return "Dead Creep"
        case 113726618:
            return "kai"
        case 348480252:
            return "nithin"  
        case 373219349:
            return "swamiji"
        case 351831800:
            return "Altair"
        case 86718410:
            return "acidblue"
        default:
            return "Anonymous"                                    
    }
  }
  
  getTeamColor = (index) => {
      if(index > 4) {
          return '#C23C2A'
      } else {
          return '#A9CF54'
      }
  }
  
  getScoreTheme = (check) => {
      if(!check) {
          return '#C23C2A'
      } else {
          return '#A9CF54'
      }
  }
  
  getScores = () => {
      return this.props.matchData.radiant_score + '-' +  this.props.matchData.dire_score
  }
  
  render() {
      var matchInfoBuild = "";
      var self = this;
      if(this.props.matchData) {
        matchInfoBuild = this.props.matchData.players.map((match, index) => {
          var hero = this.props.heroInfo.filter(function(hero) {if(hero.id==match.hero_id) {return hero}})
          var heroNameExtesnion = hero[0].name.substring(14,hero[0].name.length);
          var heroImg = "http://cdn.dota2.com/apps/dota2/images/heroes/" + heroNameExtesnion +"_sb.png"

          if(match.item_0) {
            var item_0 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_0) {return item}})
            var item_0_extesnion = item_0[0].name.substring(5,item_0[0].name.length);
            var item_0_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_0_extesnion +"_lg.png"
          }

          if(match.item_1) {
            var item_1 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_1) {return item}})
            var item_1_extesnion = item_1[0].name.substring(5,item_1[0].name.length);
            var item_1_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_1_extesnion +"_lg.png"
          }

          if(match.item_2) {
            var item_2 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_2) {return item}})
            var item_2_extesnion = item_2[0].name.substring(5,item_2[0].name.length);
            var item_2_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_2_extesnion +"_lg.png"
          }     

          if(match.item_3) {
            var item_3 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_3) {return item}})
            var item_3_extesnion = item_3[0].name.substring(5,item_3[0].name.length);
            var item_3_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_3_extesnion +"_lg.png"
          }

          if(match.item_4) {
            var item_4 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_4) {return item}})
            var item_4_extesnion = item_4[0].name.substring(5,item_4[0].name.length);
            var item_4_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_4_extesnion +"_lg.png"
          }

          if(match.item_5) {
            var item_5 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_5) {return item}})
            var item_5_extesnion = item_5[0].name.substring(5,item_5[0].name.length);
            var item_5_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_5_extesnion +"_lg.png"
          }                            

          return (<tr>
            <td><img src={heroImg}></img></td>
            <td style={{color:this.getTeamColor(index)}}>{this.getPlayerName(match.account_id)}</td>
            <td>{match.kills}</td>
            <td>{match.deaths}</td>
            <td>{match.assists}</td>
            <td>{match.gold_per_min}</td>
            <td>{match.xp_per_min}</td>
            <td>
              <img style={{width:'30px'}} src={item_0_img}></img>
              <img style={{width:'30px'}} src={item_1_img}></img>
              <img style={{width:'30px'}} src={item_2_img}></img>
              <img style={{width:'30px'}} src={item_3_img}></img>
              <img style={{width:'30px'}} src={item_4_img}></img>
              <img style={{width:'30px'}} src={item_5_img}></img>
            </td>
          </tr>)
        })
      }
      
    return (
      <div>
        <div className="matchInfoDiv">
            <img onClick={this.closeMatchInfo} className="backBtn" src="/back_btn.png"></img>
            <span className="matchInfoDetails" style={{color:this.getScoreTheme(this.props.matchData.radiant_win)}}>{this.props.matchData.radiant_win ? "RADIANT VICTORY" : "DIRE VICTORY"}</span>
            <span className="matchInfoDetails">{this.getScores()}</span>
        </div>
        <Table bordered condensed>
        <thead>
            <tr>
            <th>Hero</th>
            <th>Player</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>Assists</th>
            <th>GPM</th>
            <th>XPM</th>
            <th>ITEMS</th>
            </tr>
        </thead>
        <tbody>
            {matchInfoBuild}
        </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  matchesInfo: state.fetch.matchesInfo,
  playerInfo: state.fetch.playerInfo,
  heroInfo: state.fetch.heroInfo,
  itemsInfo: state.fetch.itemsInfo,
  showMatchPage: state.fetch.showMatchPage,
  matchData: state.fetch.matchData
})

export default connect(
  mapStateToProps
)(MatchInfo)


