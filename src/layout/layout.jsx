import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu/menu';
import MenuContainer from '../components/menu/menu-container';
import MenuItem from '../components/menu/menu-item';
import {Link} from 'react-router';
import {autobind} from 'core-decorators';
import { connect } from 'react-redux';
import ProductService from '../backend/products';
import Features from '../backend/features';

const menu = require('../json/mainmenu.json');
@connect( store => {
   let {cart, compare} = store;
   return {cart, compare:compare.compare};
})
@autobind()
export default class Layout extends React.Component {
   constructor(props) {
      super(props);

      this.productService = new ProductService();
      this.productService.getAllProducts().then((response) => {
         console.log(response)
      });

      this.productService = new Features();
      this.productService.getAllFeatures().then((response) => {
         console.log(response)
      });
   }
   render() {
      return (
          <div className="page">
             <div className="top-panel">
                <div className="container">
                   <div className="top-panel-inner row flex-between flex-middle">
                      <MenuContainer classList="top-menu-wrapper cell- hide-sm" menuType={'top'}>
                         <Menu>

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
                         <Link to="/compare" className="compares-widget-link">
                             <div className="shopcart-icon fa fa-bar-chart"></div>
                             <span className="hide-sm">Сравнение:</span>
                             <div className="widget-count">{this.props.compare.length||0}</div>
                         </Link>
                      </div>
                      <div className="shopcart-widget cell-">
                         <Link to="/cart" title="Корзина" className="shopcart-link">
                            <div className="shopcart-icon fa fa-shopping-cart"></div>
                            <span className="hide-sm">Корзина:</span>
                            <div className="widget-count">{`${this.props.cart.sum||0} р.`}</div>
                         </Link>
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