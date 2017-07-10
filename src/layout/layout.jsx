import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu/menu';
import MenuContainer from '../components/menu/menu-container';
import MenuItem from '../components/menu/menu-item';
import {autobind} from 'core-decorators';
import * as actions from '../actions/cart';
import { connect } from 'react-redux';

const menu = require('../json/mainmenu.json');
@connect( store => {
   return store.service;
})

@autobind()
export default class Layout extends React.Component {
   constructor(props) {
      super(props);
   }

   // get totalPrice() {
   //    return
   // }

   render() {
      return (
          <div className="page">
             <div className="top-panel">
                <div className="container">
                   <div className="top-panel-inner row flex-between flex-middle">
                      <MenuContainer classList="top-menu-wrapper cell- hide-sm">
                         <Menu menuType={'top'}>

                            {/*{ menu.map((item, index) =>*/}
                               {/*<MenuItem name={item.name} href={`/${item.link}`} key={index} />) };*/}

                            <MenuItem name={'Доставка'} href={'/delivery'} />
                            <MenuItem name={'Оплата'} href={'/payment'} />
                            <MenuItem name={'Статьи'} href={'/posts'} />
                            <MenuItem name={'Контакты'} href={'/contacts'} />
                         </Menu>
                      </MenuContainer>

                      <div className="cell- hide show-sm">
                         <button type="button" className="top-panel-open">
                            <i className="fa fa-bars"></i>
                         </button>
                         <button type="button" className="top-panel-open">
                            <i className="fa fa-search"></i>
                         </button>
                      </div>

                      <div className="compares-widget cell- ">
                         <a href="#" className="compares-widget-link">
                             <span className="shopcart-icon fa fa-bar-chart">
                             </span>
                            <span className="hide-sm">Сравнение:</span>
                            <div className="widget-count">{/*{this.totalPrice}*/}2</div>
                         </a>
                      </div>
                      <div className="shopcart-widget cell-">
                         <a href="#" title="Корзина" className="shopcart-link">
                            <span className="shopcart-icon">
                               <i className="fa fa-shopping-cart"></i>
                            </span>
                            <span className="hide-sm">Корзина:</span>
                            <div className="widget-count">{/*{`${this.totalPrice}р.`}*/}12 112 р.</div>
                         </a>
                      </div>
                   </div>
                </div>
             </div>

             <div className="page-wrapper fhg-content">
                <div className="container page-inner">

                   <Header />

                   <MenuContainer classList="main-menu-wrapper hide-sm" menuType={'main'}>
                      <Menu>
                         <MenuItem name={'Домашние кинотеатры'} href={'/collection/theatres'}>
                            <Menu level={2}>
                               <MenuItem name={'Телевизоры'} href={'/collection/3d-televizory'} />
                               <MenuItem name={'Саунд-системы'} href={'/collection/sound-systems'} />
                            </Menu>
                         </MenuItem>
                         <MenuItem name={'Планшеты'} href={'/collection/tablets'} />
                         <MenuItem name={'Ноутбки'} href={'/collection/notes'} />
                         <MenuItem name={'Фотоаппараты'} href={'/collection/photos'} />
                      </Menu>
                   </MenuContainer>

                   { this.props.children }

                </div>
             </div>

             <Footer />
          </div>
      );
   }
}