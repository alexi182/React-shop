import * as constants from '../constansts/compare';

export default function compareReducers(state ={ compare:[] }, action ) {
   switch (action.type) {
      case constants.COMPARE: {

         let compare = state.compare.slice();
         let compareItem = compare.find(p => p.product.id == action.payload.product.id);

         if(compareItem && compareItem.count >= 4) {
            return
         } else {
            compareItem.push(action.payload);
            compareItem.count += action.payload.count
         }
      }
   }
   return state;
}