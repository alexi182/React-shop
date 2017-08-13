import * as constants from '../constansts/product';

export default function productReducers(
    state = {
       product:undefined,
       isFinding:false,
       error: undefined }, action) {

   switch (action.type) {
      case `${constants.FIND}_PENDING`: {
         state = {...state, isFinding:true, error:undefined};
         break;
      }
      case `${constants.FIND}_FULFILLED`: {
         state = {...state, isFinding:false, product:action.payload};
         break;
      }
      case `${constants.FIND}_REJECTED`: {
         state = {...state, isFinding:false, error:action.payload};
         break;
      }
   }
   return state;
}