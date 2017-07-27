import * as constants from '../constansts/compare';

function compare(product, count) {
   return {
      type: constants.COMPARE,
      payload: {
         product,count
      }
   }
}

export {compare}