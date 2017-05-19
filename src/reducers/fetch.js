// Reducers for login module

const fetch = (state = {
  matchesInfo: [],
  playerInfo: [],
  heroInfo: {},
  itemsInfo: {},
  loader: true
  }, action) => {
      console.log('reducer......', action.type)
    switch (action.type) {
      case 'FETCH_DOTA_DATA':
        return {...state,
          matchesInfo: action.response.test.matchesInfo,
          playerInfo: action.response.test.totalInfo,
          loader: false
        }
      case 'FETCH_HERO_INFO':
        return {...state,
          heroInfo: action.response.heroInfo,
        }   
      case 'FETCH_ITEMS_INFO':
        return {...state,
          itemsInfo: action.response.itemsInfo,
        }    
      case 'ENABLE_LOADER':
        return {...state,
          loader: true  
        }
      default:
        return state
    }
}

export default fetch;
