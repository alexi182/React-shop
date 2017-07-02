import Menu from '../components/menu/menu';
import MenuContainer from '../components/menu/menu-container';
import MenuItem from '../components/menu/menu-item';
import ProductItem from './productitem';
const products = require('../json/products.json');

export default class ProductPage extends React.Component{
   render() {
      return (
          <div className="row">

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


                   <ul className="collection-menu menu level-1">
                      <li className="collection-menu-item menu-item level-1  is-close">
                         <a href="#" className="collection-menu-link menu-link level-1">Домашние кинотеары</a>

                         <button className="collection-menu-marker menu-marker menu-marker level-1" type="button"></button>

                         <ul className="collection-menu menu level-2">
                            <li className="collection-menu-item menu-item level-2">
                               <a href="#" className="collection-menu-link menu-link level-2">Телевизоры</a>
                            </li>
                            <li className="collection-menu-item menu-item level-2 ">
                               <a href="#" className="collection-menu-link menu-link level-2">Саунд-системы</a>
                            </li>
                         </ul>
                      </li>
                      <li className="collection-menu-item menu-item level-1 is-current">
                        <a href="#" className="collection-menu-link menu-link level-1">Планшеты</a>
                     </li>
                      <li className="collection-menu-item menu-item level-1 ">
                         <a href="#" className="collection-menu-link menu-link level-1">Ноутбуки</a>
                      </li>
                      <li className="collection-menu-item menu-item level-1 ">

                         <a href="#" className="collection-menu-link menu-link level-1">Фотоаппараты</a>
                      </li>
                   </ul>
                </div>

                <form className="collection-filter " action="#" method="get" data-submit-onchange="true">

                   <div className="collection-filter-header">
                      Фильтр
                   </div>

                   <div className="filter  is-close">
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

                   <div className="filter  is-close">
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

                   <div className="filter  is-close">
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
                   <div className="filter  is-close">

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

                   <div className="filter  is-close">
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

                   <div className="filter  is-close">
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

                   <div className="filter  is-close">
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

                   <div className="filter  is-close">
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

             <div className="page-content cell-9 cell-8-md cell-12-sm">
                <div className="decorated-title-wrapper">
                   <div className="decorated-title">
                      <div className="page-header-wrapper">
                         <h1 className="page-header">
                            Планшеты
                         </h1>
                      </div>
                   </div>

                   <div className="collection-toolbar is-top">
                      <button type="button" className="button hide show-sm open-filter js-open-filter is-primary">Фильтр</button>

                      <form className="collection-order-wrapper " action="#" method="get">
                         <div className="collection-order is-order  ">
                            <label className="label-field hide">Сортировка</label>

                            <select className="select-field js-filter-trigger" name="order">
                               <option value="">Сортировка</option>
                               <option value="price">по возрастанию цены</option>
                               <option value="descending_price">по убыванию цены</option>
                               <option value="descending_age">сначала новые</option>
                               <option value="age">сначала старые</option>
                            </select>
                         </div>
                      </form>

                   </div>
                </div>

                <div className="collection-description at-top content editor">
                   <p><span><img src="https://static-eu.insales.ru/files/1/1917/2402173/original/tab.jpg" alt="" /></span></p>
                   <p><span>Статистика показывает, что покупатели все чаще выбирают для домашних и&nbsp;рабочих нужд планшет. Именно это устройство приходит на&nbsp;смену ноутбуку или системному блоку. Эти универсальные помощники есть в&nbsp;модельном ряду каждого крупного производителя. Давайте разберемся, какие моменты стоит учитывать при выборе подобного гаджета.</span></p>
                </div>

                <div className="products-list row">

                   {products.map((product,index) =>
                     <ProductItem {...product} key={index} />
                   )}

                </div>
                <div className="collection-toolbar is-bottom flex-middle flex-between">
                   <form className="collection-order-wrapper " action="/collection/planshety" method="get">
                      <div className="collection-order is-page-size  ">
                         <label className="label-field">Показывать по</label>
                         <select className="select-field js-filter-trigger" name="page_size">
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="48">48</option>
                            <option value="96">96</option>
                         </select>
                      </div>
                   </form>
                   <ul className="pagination text-right">
                   </ul>
                </div>
                <div className="collection-description is-seo content editor">
                </div>
             </div>
          </div>
      )
   }
}

