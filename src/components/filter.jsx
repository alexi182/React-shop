import {autobind} from 'core-decorators';

const FilterItem = (props) => {
   let select = () => {
     props.select(props.id);
   };

   return (
       <li className="filter-item">
          <input className="filter-field checkbox-field" type="checkbox" checked={props.selected} />
          <label className="filter-label checkbox-label" data-id={props.id} onClick={select}>{props.name}</label>
       </li>
   )
};

@autobind()
export default class Filter extends React.Component{
   constructor(props) {
      super(props);

      this.state = {
         filters: this.props.items,
         opened: false
      }
   }

   click() {
      this.setState({
         opened: !this.state.opened
      })
   }

   select(id) {
      let filters = this.state.filters.slice();

      let filter = filters.find(f => f.id == id );

      if(filter) {
         if (!filter.selected) {
            filter.selected = false;
         }
         filter.selected = !filter.selected;
         this.setState ({
            filters
         })
      }
   }

   render() {
      let filters = this.state.filters.map((f, index) =>
          <FilterItem {...f} select={this.select} key={index} />);

      let filterClass = this.state.opened ? "is-open" : "is-close";
      let buttonClass = this.state.opened ? "is-active" : "";

      return(
          <div className={`filter ${filterClass}`}>
             <div className="filter-control">
                <button className={`filter-toggle ${buttonClass}`} type="button" onClick={this.click}>
                   <span className="filter-name">{this.props.name}</span>
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

