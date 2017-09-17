import Menu from '../components/menu/menu';
import MenuContainer from '../components/menu/menu-container';
import MenuItem from '../components/menu/menu-item';
import Filter from '../components/filter';
import axios from 'axios';
import {autobind} from 'core-decorators';

@autobind
export default class SideBar extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         isReady: false
      };
   }

   filter() {
      let filter = this.filterComponents.reduce((p,n,index)=>{
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
      filter.type = this.filters.productType;
      console.log(filter);
   }

   componentDidMount(){
      let Path = window.location.pathname.split('/').pop();

      axios.get('http://localhost:8085/api/filters/'+Path.substr(0, Path.length-1))
          .then((response) => {
             this.filters = response.data;
             this.setState({
                isReady: true
             })
          })
   }

   render() {
      if(!this.state.isReady) return <div>Loading</div>;

      this.filterComponents = this.filters.features.map((item, index) => (
              <Filter {...item} key={index} />
          )
      );
      return (
          <div className="page-sidebar cell-3 cell-4-md hide-sm">
             <div className="collection-menu-wrapper sidebar-block">
                <div className="collection-menu-header sidebar-block-header">
                   Каталог
                </div>

                <MenuContainer classList="collection-menu-wrapper sidebar-block">
                   <Menu menuType={'collection'}>
                      <MenuItem name={'Домашние кинотеатры'} href={'/productpage'}>
                         <Menu menuType={'collection'} level={2}>
                            <MenuItem name={'Телевизоры'} href={'/productpage'} />
                            <MenuItem name={'Саунд-системы'} href={'/productpage'} />
                         </Menu>
                      </MenuItem>
                      <MenuItem name={'Планшеты'} href={'/productpage'} />
                      <MenuItem name={'Ноутбки'} href={'/productpage'} />
                      <MenuItem name={'Фотоаппараты'} href={'/productpage'} />
                   </Menu>
                </MenuContainer>
             </div>

             <form className="collection-filter" action="#" method="get">
                <div className="collection-filter-header">
                   Фильтр
                </div>

                {this.filterComponents}

                <button type="submit" className="filter-submit button is-primary" onClick={this.filter}>Применить</button>
             </form>
          </div>
      );
   }
}


