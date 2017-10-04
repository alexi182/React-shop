import * as constants from '../constansts/filter';

function filter(selected) {
   return {
      type: constants.FILTER,
      payload: {
         selected
      }
   };
}

function addFilter({name, filter}) {
   return {
      type: constants.ADD,
      payload: {
         name, filter
      }
   };
}

export {filter,addFilter }