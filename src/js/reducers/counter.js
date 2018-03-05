import { plusOne, negativeOne } from '../constants';

const counter = function(state=0, action) {
  if(action.type === plusOne) {
    return state + action.payload;
  }
  if(action.type === negativeOne) {
    return state - action.payload;
  }
  return state;
}

export default counter;