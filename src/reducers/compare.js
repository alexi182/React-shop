import * as constants from '../constansts/compare';

export default function compareReducers(state ={ compare:[] }, action ) {
   switch (action.type) {
      case constants.COMPARE: {

         let compare = state.compare.slice();
         let compareItem = compare.find(p => p.id == action.payload.id);

         if(compareItem && compare.length >= 4) {
            return
         } else {
            compare.push(action.payload);
            state = {...state, compare}
         }
         break;
      }
      case constants.DELETE: {

         let compare = state.compare.slice();

         let compareIndex = compare.findIndex(p => p.id == action.payload);
         if(compareIndex !== -1) {
            compare.splice(compareIndex, 1);
            state = {...state, compare}
         }
      }
   }
   return state;
}