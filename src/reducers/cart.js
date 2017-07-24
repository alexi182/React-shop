import * as constants from '../constansts/cart';

function countSum(cart) {
   return cart.reduce((prev, cur) => prev + cur.count * cur.product.price.value, 0);
}

export default function cartReducers(state = { cart:[], sum:0 }, action) {

   switch (action.type) {
      case constants.ADD: {

         let cart = state.cart.slice();
         let cartItem = cart.find(p => p.product.id == action.payload.product.id);
thtdjlxbr

         if (cartItem) {
            cartItem.count += action.payload.count
         } else {
            cart.push(action.payload)
         }

          let sum  = countSum(cart);
         // console.log(sum);

         state = { ...state, cart, sum };
         break;
      }

      case constants.REMOVE: {
         let cart = state.cart.slice();

         let cartIndex = cart.findIndex((p) => p.product.id == action.payload);

         if(cartIndex !== -1) {
            cart.splice(cartIndex, 1);
         }

         let sum  = countSum(cart);

         state = {...state, cart,sum};
         break;
      }

      case constants.INC: {
         let cart = state.cart.slice();

         let cartItem = cart.find((p) => p.product.id == action.payload);

         if(cartItem) {
            cartItem.count = cartItem.count + 1;
            let sum  = countSum(cart);
            state = {...state, cart, sum};
         }
         break;
      }

      case constants.DEC: {
         let cart = state.cart.slice();

         let cartItem = cart.find((p) => p.product.id == action.payload);

         if(cartItem && cartItem.count > 1)  {
            cartItem.count = cartItem.count - 1;
            let sum  = countSum(cart);
            state = {...state, cart, sum};
         }
         break;
      }

   }

   return state;
}

