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
         opened: false, //начальное состоние
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

      // let filter = filters.find(f => f.id == id);
      let filter = filters[id] || null;
      let selected = this.state.selected.slice();

      //if(filter) {
      // if (!filter.selected) {   //если в фильтре не объявлено свойство selected, то фильтр не был выбран изначально
      //    filter.selected = false;
      // }
      //
      // filter.selected = !filter.selected;

      if(selected.includes(filter)) {
         selected = selected.filter(e => e != filter);
      } else {
         selected.push(filter)
      }
      this.setState ({
         selected
      });
      // }
   }

   render() {
      let filters = this.state.filters.map((f, index) =>
          <FilterItem /*{...f}*/ value={f} id={index} selected={this.state.selected.includes(f)} select={this.select} key={index} />);

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

