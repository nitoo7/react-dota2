import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Table } from 'react-bootstrap';
import './rightPanel.css'
import { fetchData, fetchHeroInfo, fetchItemsInfo } from '../../action/fetchAction'
import { connect } from 'react-redux'
class RightPanel extends Component {
  static propTypes = {
    matchesInfo: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  handleLogout = () => {
    this.props.onSubmit();
  }

  fetchDotaData = () => {
    const {dispatch} = this.props
    dispatch(fetchData("348480252"));
    dispatch(fetchHeroInfo());
    dispatch(fetchItemsInfo());
  }

  componentWillMount() {
    this.fetchDotaData();
  }
  
  
  render() {
      var playerInfoBuild = "";
      if(this.props.playerInfo) {
        playerInfoBuild = this.props.playerInfo.map((match) => {
          var hero = this.props.heroInfo.filter(function(hero) {if(hero.id==match.hero_id) {return hero}})
          var heroNameExtesnion = hero[0].name.substring(14,hero[0].name.length);
          var heroImg = "http://cdn.dota2.com/apps/dota2/images/heroes/" + heroNameExtesnion +"_sb.png"

          if(match.item_0) {
            var item_0 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_0) {return item}})
            var item_0_extesnion = item_0[0].name.substring(5,item_0[0].name.length);
                      console.log('^^^^^==>', item_0_extesnion)
            var item_0_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_0_extesnion +"_lg.png"
          }

          if(match.item_1) {
            var item_1 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_1) {return item}})
            var item_1_extesnion = item_1[0].name.substring(5,item_1[0].name.length);
                      console.log('^^^^^==>', item_1_extesnion)
            var item_1_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_1_extesnion +"_lg.png"
          }

          if(match.item_2) {
            var item_2 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_2) {return item}})
            var item_2_extesnion = item_2[0].name.substring(5,item_2[0].name.length);
                      console.log('^^^^^==>', item_2_extesnion)
            var item_2_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_2_extesnion +"_lg.png"
          }     

          if(match.item_3) {
            var item_3 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_3) {return item}})
            var item_3_extesnion = item_3[0].name.substring(5,item_3[0].name.length);
                      console.log('^^^^^==>', item_3_extesnion)
            var item_3_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_3_extesnion +"_lg.png"
          }

          if(match.item_4) {
            var item_4 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_4) {return item}})
            var item_4_extesnion = item_4[0].name.substring(5,item_4[0].name.length);
                      console.log('^^^^^==>', item_4_extesnion)
            var item_4_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_4_extesnion +"_lg.png"
          }

          if(match.item_5) {
            var item_5 = this.props.itemsInfo.filter(function(item) {if(item.id==match.item_5) {return item}})
            var item_5_extesnion = item_5[0].name.substring(5,item_5[0].name.length);
                      console.log('^^^^^==>', item_5_extesnion)
            var item_5_img = "http://cdn.dota2.com/apps/dota2/images/items/" + item_5_extesnion +"_lg.png"
          }                            

          return (<tr>
            <td><img src={heroImg}></img></td>
            <td>{match.kills}</td>
            <td>{match.assists}</td>
            <td>{match.deaths}</td>
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
      <Col xs={9}>
        <Table bordered condensed>
            <thead>
              <tr>
                <th>Hero</th>
                <th>Kills</th>
                <th>Deaths</th>
                <th>Assists</th>
                <th>GPM</th>
                <th>XPM</th>
                <th>ITEMS</th>
              </tr>
            </thead>
            <tbody>
              {playerInfoBuild}
            </tbody>
        </Table>
      </Col>
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
)(RightPanel)


