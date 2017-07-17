import * as constants from '../constansts/cart';

function countSum(cart) {
   return cart.reduce((prev, cur) => prev + cur.count * cur.price.value, 0);
}

export default function cartReducers(state = { cart:[], sum:0 }, action) {

   switch (action.type) {

      case constants.ADD: { debugger;

         let cart = state.cart.slice();

         let cartItem = cart.find(p => p.product.id == action.payload.product.id);

         if (cartItem) {
            cartItem.count += action.payload.count
         } else {
            cart.push(action.payload)
         }

          let sum  = countSum(cart);

         state = { ...state, cart, sum };
         break;
      }
   }

   return state;
}

