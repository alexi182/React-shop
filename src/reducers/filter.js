import * as constants from '../constansts/filter';

export default function filterReducers(state = { selected:[] }, action) {

   switch (action.type) {
      case constants.FILTER: {

         console.log(state);
         console.log(action);
         let filterSelected = state.filterSelected.slice();

         let filter = filterSelected.reduce((p, n, index)=>{
            let selected = n.state.selected;
            if (selected.length !== 0) {
               p['selected'] = []
            }
            p['selected'].push({
               name: n.props.name,
               selected
            });
            return p
         },{});

         state = { ...state, filter };
         console.log(filter);
         break;
      }

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
               f.filters.push(s)
            } else {
               f.filters = f.filters.filter(el => el !== filter);
            }
         }
         state = {...state, selected};
         break;
      }
   }

   return state;
}

