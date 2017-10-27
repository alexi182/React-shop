import * as constants from '../constansts/product';

export default function productReducer(state = {
       product:null,
       isFinding:false,
       error: undefined }, action) {
   switch (action.type) {
      case `${constants.GET}_PENDING`: {
         state = {...state, isFinding:true, error:undefined};
         break;
      }
      case `${constants.GET}_FULFILLED`: {
         state = {...state, isFinding:false, product:action.payload};
         break;
      }
      case `${constants.GET}_REJECTED`: {
         state = {...state, isFinding:false, error:action.payload};
         break;
      }
   }
   return state;
}