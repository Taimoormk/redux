import { plusOne, negativeOne }  from '../constants/index';

export function plusOneToCounter() {
  return {
    type: plusOne,
    payload: 1
  }
};

export function negativeOneToCounter() {
  return {
    type: negativeOne,
    payload: 1
  }
};