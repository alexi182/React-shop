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

function remove(id) {
   return {
      type: constants.REMOVE,
      payload: id
   };
}

function inc(id) {
   return {
      type: constants.INC,
      payload: id
   };
}

function dec(id) {
   return {
      type: constants.DEC,
      payload: id
   };
}

export {add,compare,makeOrder,remove,inc,dec}