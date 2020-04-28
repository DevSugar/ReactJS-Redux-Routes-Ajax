const initialState = {
    time: '',
  };
  
  export default function(state = initialState, action) {
    if(action.type == 'TIME_CLICKED') {
      return {
          time: action.text
      };
    }
    return state;
  }