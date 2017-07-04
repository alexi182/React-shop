import Menu from '../components/menu/menu';
import MenuContainer from '../components/menu/menu-container';
import MenuItem from '../components/menu/menu-item';

export default class SideBar extends React.Component {
   render() {
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

                <div className="filter is-close">
                   <div className="filter-control">
                      <button className="filter-toggle" type="button">
                         <span className="filter-name">Цвет</span>
                         <sup className="filter-count"></sup>
                      </button>
                      <button className="filter-clear button" type="button">
                         <i className="icon clear-icon ion-ios-close-outline"></i>
                      </button>
                   </div>
                   <div className="filter-items-wrapper">
                      <ul className="filter-items-list scrollable">
                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="7158483" name="options[810552][]" />
                            <label className="filter-label checkbox-label">Черный</label>
                         </li>

                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="7166053" name="options[810552][]" />
                            <label className="filter-label checkbox-label">Серый</label>
                         </li>

                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="7166056" name="options[810552][]" />
                            <label className="filter-label checkbox-label">Золотой</label>
                         </li>

                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="7183761" name="options[810552][]" />
                            <label className="filter-label checkbox-label">Белый</label>
                         </li>
                      </ul>
                   </div>
                </div>

                <div className="filter is-close">
                   <div className="filter-control">
                      <button className="filter-toggle" type="button" data-target="parent" data-group="filters">
                         <span className="filter-name">Диагональ</span>
                         <sup className="filter-count"></sup>
                      </button>
                      <button className="button filter-clear" type="button">
                         <i className="icon clear-icon ion-ios-close-outline"></i>
                      </button>
                   </div>
                   <div className="filter-items-wrapper">
                      <ul className="filter-items-list scrollable">
                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="23398799" name="characteristics[]" />
                            <label className="filter-label checkbox-label">7.9</label>
                         </li>

                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="23442187" name="characteristics[]" />
                            <label className="filter-label checkbox-label">8</label>
                         </li>

                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="23444751" name="characteristics[]" />
                            <label className="filter-label checkbox-label">10.1</label>
                         </li>
                      </ul>
                   </div>
                </div>

                <div className="filter is-close">
                   <div className="filter-control">
                      <button className="filter-toggle" type="button">
                         <span className="filter-name">Разрешение экрана</span>
                         <sup className="filter-count"></sup>
                      </button>
                      <button className="button filter-clear" type="button">
                         <i className="icon clear-icon ion-ios-close-outline"></i>
                      </button>
                   </div>
                   <div className="filter-items-wrapper">
                      <ul className="filter-items-list scrollable">
                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="23398800" name="characteristics[]" />
                            <label className="filter-label checkbox-label">2048 x 1536</label>
                         </li>
                      </ul>
                   </div>
                </div>

                <div className="filter is-close">
                   <div className="filter-control">
                      <button className="filter-toggle" type="button" data-target="parent" data-group="filters">
                         <span className="filter-name">Грантия</span>
                         <sup className="filter-count"></sup>
                      </button>
                      <button className="button filter-clear" type="button">
                         <i className="icon clear-icon ion-ios-close-outline"></i>
                      </button>
                   </div>

                   <div className="filter-items-wrapper">
                      <ul className="filter-items-list scrollable">

                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="23395198" name="characteristics[]" />
                            <label className="filter-label checkbox-label">1 год</label>
                         </li>
                      </ul>
                   </div>
                </div>

                <div className="filter is-close">

                   <div className="filter-control">
                      <button className="filter-toggle" type="button" data-target="parent" data-group="filters">
                         <span className="filter-name">Wi-Fi соединение</span>
                         <sup className="filter-count"></sup>
                      </button>
                      <button className="button filter-clear" type="button">
                         <i className="icon clear-icon ion-ios-close-outline"></i>
                      </button>
                   </div>

                   <div className="filter-items-wrapper">
                      <ul className="filter-items-list scrollable">
                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="23398725" name="characteristics[]" />
                            <label className="filter-label checkbox-label">да</label>
                         </li>
                      </ul>
                   </div>
                </div>

                <div className="filter is-close">
                   <div className="filter-control">
                      <button className="filter-toggle" type="button" data-target="parent" data-group="filters">
                         <span className="filter-name">Поддержка SIM-карты</span>
                         <sup className="filter-count"></sup>
                      </button>
                      <button className="button filter-clear" type="button">
                         <i className="icon clear-icon ion-ios-close-outline"></i>
                      </button>
                   </div>

                   <div className="filter-items-wrapper">
                      <ul className="filter-items-list scrollable">
                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="23398801" name="characteristics[]"/>
                            <label className="filter-label checkbox-label">Nano-SIM</label>
                         </li>
                      </ul>
                   </div>
                </div>

                <div className="filter is-close">
                   <div className="filter-control">
                      <button className="filter-toggle" type="button" data-target="parent" data-group="filters">
                         <span className="filter-name">Емкость аккумулятора, мАч</span>
                         <sup className="filter-count"></sup>
                      </button>
                      <button className="button filter-clear" type="button">
                         <i className="icon clear-icon ion-ios-close-outline"></i>
                      </button>
                   </div>
                   <div className="filter-items-wrapper">
                      <ul className="filter-items-list scrollable">
                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="23398802" name="characteristics[]" />
                            <label className="filter-label checkbox-label">5124</label>
                         </li>
                      </ul>
                   </div>
                </div>

                <div className="filter is-close">
                   <div className="filter-control">
                      <button className="filter-toggle" type="button" data-target="parent" data-group="filters">
                         <span className="filter-name">Объем оперативной памяти, Гб</span>
                         <sup className="filter-count"></sup>
                      </button>
                      <button className="button filter-clear" type="button">
                         <i className="icon clear-icon ion-ios-close-outline"></i>
                      </button>
                   </div>

                   <div className="filter-items-wrapper">
                      <ul className="filter-items-list scrollable">
                         <li className="filter-item">
                            <input className="filter-field checkbox-field" type="checkbox" value="23418394" name="characteristics[]" />
                            <label className="filter-label checkbox-label">16</label>
                         </li>
                      </ul>
                   </div>
                </div>

                <div className="filter is-close">
                   <div className="filter-control">
                      <button className="filter-toggle" type="button" data-target="parent" data-group="filters">
                         <span className="filter-name">Цена</span>
                         <sup className="filter-count"></sup>
                      </button>
                      <button className="button filter-clear filter-price-clear" type="button">
                         <i className="icon clear-icon"></i>
                      </button>
                   </div>

                   <div className="filter-items-wrapper">
                      <div className="filter-items">
                         <div className="filter-body range-slider js-filter-range-slider">
                            <span className="irs js-irs-0"><span className="irs"><span className="irs-line" tabIndex="-1"><span className="irs-line-left"></span><span className="irs-line-mid"></span><span className="irs-line-right"></span></span><span className="irs-min">12 500</span><span className="irs-max">40 800</span><span className="irs-from">0</span><span className="irs-to">0</span><span className="irs-single">0</span></span><span className="irs-grid"></span><span className="irs-bar"></span><span className="irs-shadow shadow-from"></span><span className="irs-shadow shadow-to"></span><span className="irs-slider from"></span><span className="irs-slider to"></span></span><div className="js-filter-range-placeholder irs-hidden-input" data-min="12500" data-max="40800" data-from="" data-to="" data-range-placeholder="">
                         </div>
                            <div className="range-slider-input hide">
                               <input className="input-field input-range" name="price_min" placeholder="12500" value="" data-range-from="" disabled="" />
                               <input className="input-field input-range" name="price_max" placeholder="40800" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <button type="submit" className="filter-submit button is-primary">Применить</button>
             </form>
          </div>
      );
   }
}


