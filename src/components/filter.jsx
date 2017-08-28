import {autobind} from 'core-decorators';

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

@autobind()
export default class Filter extends React.Component{
   constructor(props) {
      super(props);

      this.state = {
         filters: this.props.values, //передал из sidebar.jsx  45с.
         opened: false,
         selected: []
      }
   }

   click() {
      this.setState({
         opened: !this.state.opened
      })
   }

   select(id) {
      let filters = this.state.filters.slice();
      let selected = this.state.selected.slice();
      let filter = filters[id] || null;

      if (selected.includes(filter)) {
         selected = selected.filter(e => e!==filter);
      } else {
         selected.push(filter)
      }

      this.setState ({
         selected
      })
   }

   render() {
      let filters = this.state.filters.map((f, index) =>
          <FilterItem value={f} selected={this.state.selected.includes(f)} id={index} select={this.select} key={index} />);

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

