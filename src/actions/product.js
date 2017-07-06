import * as constants from '../constansts/cart';

function add(id) {
   return {
      type: constants.ADD,
      payload: id
   };
}