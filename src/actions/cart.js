import * as constants from '../constansts/cart';

function add(product, count) {
   return {
      type: constants.ADD,
      payload: {
         product, count
      }
   };
}

function compare(id) {
   return {
      type: constants.COMPARE,
      payload: id
   };
}

function makeOrder(order) {
   return {
      type: constants.ORDER,
      payload: order
   };
}


export {add,compare,makeOrder}