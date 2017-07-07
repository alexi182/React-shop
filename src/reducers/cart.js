import * as constants from '../constansts/cart';

export default function cartReducers(state = { carts:[] }, action) {

   switch (action.type) {

      case constants.ADD: {

         let notes = state.carts.slice();

         notes.push({
            text: action.payload,
            id: state.notes.length + 1
         });

         state = { ...state, carts };
         break;
      }

   }

   return state;
}

