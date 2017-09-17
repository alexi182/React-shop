import * as constants from '../constansts/cart';

function add(product, count) {
   return {
      type: constants.ADD,
      payload: {
         product, count
      }
   };
}

function makeOrder(product) {
   return {
      type: constants.ORDER,
      payload: product
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

export {add,makeOrder,remove,inc,dec}