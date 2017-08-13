import * as constants from '../constansts/compare';

function compare(product) {
   return {
      type: constants.COMPARE,
      payload: product
   }
}

function remove(id) {
   return {
      type: constants.DELETE,
      payload: id
   }
}

export {compare, remove}