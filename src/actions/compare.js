import * as constants from '../constansts/compare';

function compare(product) {
   return {
      type: constants.COMPARE,
      payload: product
   }
}

function remove(product) {
   return {
      type: constants.DELETE,
      payload: product
   }
}

export {compare, remove}