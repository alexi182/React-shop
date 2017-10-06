import {autobind} from 'core-decorators';
import * as filterActions from '../actions/filter';
import { connect } from 'react-redux';

const FilterItem = (props) => {
   let select = () => {
      props.select(props.id);
   };

   return (
       <li className="filter-item">
          <input className="filter-field checkbox-field" type="checkbox" checked={props.selected} />
          <label className="filter-label checkbox-label" data-id={props.id} onClick={select}>{props.value}</label>
       </li>
   )
};


@connect (store => {
   return {
      filter: store.filter,
   }
})
@autobind()
export default class Filter extends React.Component{
   constructor(props) {
      super(props);

      this.filters = this.props.values;

      this.state = {
         opened: false
      }
   }

   click() {
      this.setState({
         opened: !this.state.opened
      })
   }

   select(id) {
      let filters = this.filters.slice();
      let filter = filters[id] || null;

      if(filter == null) {
         return;
      }
      let toDispatch = filterActions.addFilter({
         name: this.props.name, filter
      });

      this.props.dispatch(toDispatch);
   }

   render() {
      let filters = this.filters.map((f, index) =>{
         let filter = this.props.filter.selected.find(el => el.name == this.props.name);
         let selected = false;
         if (filter) {
            selected = filter.filters.includes(f);
         }
         return <FilterItem value={f} selected={selected} id={index} select={this.select} key={index} />
      });

      let filterClass = this.state.opened ? "is-open" : "is-close";
      let buttonClass = this.state.opened ? "is-active" : "";

      return(
          <div className={`filter ${filterClass}`}>
             <div className="filter-control">
                <button className={`filter-toggle ${buttonClass}`} type="button" onClick={this.click}>
                   <span className="filter-name">{this.props.display}</span>
                </button>
             </div>
             <div className="filter-items-wrapper">
                <ul className="filter-items-list scrollable">
                   {filters}
                </ul>
             </div>
          </div>
      )
   }
}

