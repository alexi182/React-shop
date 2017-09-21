import Menu from '../components/menu/menu';
import MenuContainer from '../components/menu/menu-container';
import MenuItem from '../components/menu/menu-item';
import Filter from '../components/filter';
import axios from 'axios';

export default class SideBar extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         isReady: false
      };

      let Path = window.location.pathname.split('/').pop();

      axios.get('http://localhost:8085/api/filters/'+Path.substr(0,Path.length-1)).then((response) => {
         this.filters = response.data;
         this.setState({
            isReady: true
         })
      })
   }

   render() {
      if(!this.state.isReady) return <div>-</div>; //если не готов компонент, то мы его ен выводим. когда всё готово у нас есть свойство filters и мы его выводим.

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

             <form className="collection-filter " action="#" method="get">
                <div className="collection-filter-header">
                   Фильтр
                </div>

                {this.filters.features.map((item, index) => (
                        <Filter {...item} key={index} />
                    )
                )}

                {/*<div className="filter-items-wrapper">*/}
                {/*<div className="filter-items">*/}
                {/*<div className="filter-body range-slider js-filter-range-slider">*/}
                {/*<span className="irs js-irs-0"><span className="irs"><span className="irs-line" tabIndex="-1"><span className="irs-line-left"></span><span className="irs-line-mid"></span><span className="irs-line-right"></span></span><span className="irs-min">12 500</span><span className="irs-max">40 800</span><span className="irs-from">0</span><span className="irs-to">0</span><span className="irs-single">0</span></span><span className="irs-grid"></span><span className="irs-bar"></span><span className="irs-shadow shadow-from"></span><span className="irs-shadow shadow-to"></span><span className="irs-slider from"></span><span className="irs-slider to"></span></span><div className="js-filter-range-placeholder irs-hidden-input" data-min="12500" data-max="40800" data-from="" data-to="" data-range-placeholder="">*/}
                {/*</div>*/}
                {/*<div className="range-slider-input hide">*/}
                {/*<input className="input-field input-range" name="price_min" placeholder="12500" value="" data-range-from="" disabled="" />*/}
                {/*<input className="input-field input-range" name="price_max" placeholder="40800" />*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}

                <button type="submit" className="filter-submit button is-primary">Применить</button>
             </form>
          </div>
      );
   }
}


