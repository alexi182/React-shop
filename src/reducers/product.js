import * as constants from '../constansts/product';

export default function productsReducer(
    state = {
       products:[],
       isFinding:false,
       error: undefined }, action) {

   switch (action.type) {
      case `${constants.GET}_PENDING`: {
         state = {...state, isFinding:true, error:undefined};
         break;
      }
      case `${constants.GET}_FULFILLED`: {
         state = {...state, isFinding:false, products:action.payload};
         break;
      }
      case `${constants.GET}_REJECTED`: {
         state = {...state, isFinding:false, error:action.payload};
         break;
      }
   }
   return state;
}