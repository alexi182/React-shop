import * as constants from '../constansts/cart';

export default function cartReducers(state = { carts:[] }, action) {

   switch (action.type) {

      case constants.ADD: {


         state = { ...state, carts };
         break;
      }
   }

   return state;
}

