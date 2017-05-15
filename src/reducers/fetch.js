// Reducers for login module

const fetch = (state = {
  dotaData: {}
  }, action) => {
      console.log('reducer......', action.type)
    switch (action.type) {
      case 'FETCH_DOTA_DATA':
        console.log('REDUCEER_DATA==>', action.response)
        return {
          dotaData: true,
        }
      default:
        return state
    }
}

export default fetch;
