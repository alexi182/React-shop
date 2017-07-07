import * as constants from '../constansts/cart';

function add(id) {
   return {
      type: constants.ADD,
      payload: id
   };
}

function compare(id) {
   return {
      type: constants.COMPARE,
      payload: id
   };
}

function order(id) {
   return {
      type: constants.ORDER,
      payload: id
   };
}

function increase(val) {
   return {
      type: constants.INCREASE,
      payload: val
   };
}

function decrease(val) {
   return {
      type: constants.DECREASE,
      payload: val
   };
}

export { add,compare,order,increase,decrease }