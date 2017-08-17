import * as constants from '../constansts/product';

function findProduct(id) {
   return {
      type: constants.FIND,
      payload: id         /*productService.find(id)*/
   }
}

export {findProduct}