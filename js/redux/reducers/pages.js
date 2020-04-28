import { CHANGE_PAGE } from "../actionTypes";

const initialState = {
  pageName: '',
};

export default function(state = initialState, action) {
  if(action.type == CHANGE_PAGE) {
      return {
        pageName: action.text
      }
    }
    return state;
}
