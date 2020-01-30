// src/store/reducer.js
import { combineReducers } from "redux";
export default combineReducers({
  havingFun: havingFunReducer
  // we can add more "slice" subreducers here later on...
});
function havingFunReducer(state = "yes", action) {
  switch (action.type) {
    case "SET_HAVING_FUN": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
