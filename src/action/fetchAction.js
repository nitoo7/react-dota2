import { verifyUserDetails } from '../api/api'
import axios from 'axios';
import bluebird from 'bluebird';
const hero_url = 'https://community-dota-2.p.mashape.com/IEconDOTA2_570/GetHeroes/v0001/?key=95882E4633AECE786EEFC5BB32471E12'
const items_url = 'https://community-dota-2.p.mashape.com/IEconDOTA2_570/GetGameItems/v0001/?key=95882E4633AECE786EEFC5BB32471E12'
const url_1 = 'https://community-dota-2.p.mashape.com/IDOTA2Match_570/GetMatchHistory/V001/?key=95882E4633AECE786EEFC5BB32471E12&format=JSON&matches_requested=10'
const url_2 = 'https://community-dota-2.p.mashape.com/IDOTA2Match_570/GetMatchDetails/V001/?key=95882E4633AECE786EEFC5BB32471E12&matches_requested=<required>'
axios.defaults.headers.common['X-Mashape-Key'] = 'i53rchyDbnmsheUDmATHzVAa2atpp1JOAx7jsnNPmRHrR2aiRn';
axios.defaults.headers.common['Accept'] = 'application/json';

const fetchDotaData = (response, playerID)  => {
  let dotaInfo = {
    matchesInfo: response,
    totalInfo: []
  }
  response.map(function(match) {
    match.players.map(function(player) {
      if(player.account_id == playerID) {
        dotaInfo.totalInfo.push(player);
      }
    })
  })
  return {
    type: 'FETCH_DOTA_DATA',
    response: {'test': dotaInfo}
  }
}

const dispatchHeroData = (data) => {
  return {
    type: 'FETCH_HERO_INFO',
    response: {'heroInfo': data}
  }
}

const dispatchItemsData = (data) => {
  return {
    type: 'FETCH_ITEMS_INFO',
    response: {'itemsInfo': data}
  }
}

const enableLoaderState = () => {
  return {
    type: 'ENABLE_LOADER',
    response: {'loader': true}
  }
}

export function fetchHeroInfo() {
  return (dispatch) => {
     axios.get(hero_url).then(function(response) {
       return dispatch(dispatchHeroData(response.data.result.heroes));
    })
  }
}

export function fetchItemsInfo() {
  return (dispatch) => {
     axios.get(items_url).then(function(response) {
       return dispatch(dispatchItemsData(response.data.result.items));
    })
  }
}

export function fetchData(playerID) {
  return (dispatch) => {
    axios.get(url_1 + '&account_id=' + playerID).then(function(response) {
      var matches = response.data.result.matches.map(function(match){return match.match_id})
      return matches;
    }).then(function(matches) {
      return bluebird.map(matches, function(matchID) {
          return axios.get(url_2 + '&match_id=' + matchID)
          .then(function(response) {
            return response.data.result;
          })
      })
    }).then(function(data) {
      return dispatch(fetchDotaData(data, playerID));
    })       
  }
}

export function enableLoader() {
  return (dispatch) => {
    return dispatch(enableLoaderState());
  }
}
