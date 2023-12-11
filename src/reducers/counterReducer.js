import * as actionTypes from "../redux/actions/actionTypes";

const counterReducer = (state = 10, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREAS_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;
  }
};

export default counterReducer;