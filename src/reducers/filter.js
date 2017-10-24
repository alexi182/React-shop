import * as constants from '../constansts/filter';

export default function filterReducers(state = { selected:[] }, action) {

   switch (action.type) {
      case constants.ADD: {
         let selected = state.selected.slice();
         let {name, filter} = action.payload;

         let f = selected.find(el => el.name == name);

         if (!f) {
            f = {
               name, filters:[]
            };
            selected.push(f)
         }

         if (!f.filters.length) {
            f.filters.push(filter)
         } else {
            let s = f.filters.find(el => el == filter);
            if (!s) {
               f.filters.push(filter)
            } else {
               f.filters = f.filters.filter(el => el !== filter);
            }
         }
         state = {...state, selected};
         break;
      }

      case constants.FILTER: {

         let filterSelected = state.selected.slice();
         let filted = action.payload;

         let filter = filterSelected.map((el,index) =>{

         });

         state = { ...state, filter };
         console.log(filter);
         break;
      }
   }

   return state;
}

