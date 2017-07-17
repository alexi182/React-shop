import BreadCrumbs from '../components/breadcrumbs';
import {autobind} from 'core-decorators';
import * as actions from '../actions/cart';
import { connect } from 'react-redux';

const products = require('../json/products.json');

@connect (state => {})
@autobind
export default class ProductPageItem extends React.Component {
   constructor(props) {
      super(props);
      console.log(props);

      this.product = products.find(p => p.id == this.props.params.id);

      // if(!product) {      //добвили в конце видео о выводе товара
      //    this.props.router.go('/notfound');
      //    return;
      // }

      this.state = {
        count: 1
      }
   }

   add() {
      let toDispatch = actions.add(this.product, this.state.count);
      this.props.dispatch(toDispatch);
   }

   inc() {
      this.setState({
        count: this.state.count +1
      })
   }

   dec() {
      if(this.state.count == 1)
         return;

      this.setState({
         count: this.state.count -1
      })
   }

   render() {
      return (
          <div className="page-content">
             <BreadCrumbs />

             <div className="decorated-title-wrapper">
                <div className="decorated-title">
                   <div className="page-header-wrapper">
                      <h1 className="page-header">
                         {this.product.name}
                      </h1>
                   </div>
                </div>
             </div>

             <div className="row">
                <div className="product-content-wrapper cell-7 cell-12-sm">
                   <div className="product-introtext on-page editor">{this.product.description}</div>

                   <form className="product-form" action="#">
                      <div className="option-selectors">
                         <div className="option-selector">
                            <div className="option option-cvet is-select">
                               <label className="option-label">Цвет</label>
                               <select className="option-values">
                                  {/*<option value="0" selected="selected">Черный</option>*/}
                                  {/*<option value="4">Белый</option>*/}
                                  { products.map((p, index) =>
                                      <option value={p.color.item} key={index}>{p.color.item}</option>
                                  )}
                               </select>
                            </div>
                         </div>
                      </div>

                      <div className="product-sku-wrapper js-product-sku-wrapper">
                         <span>Артикул:</span>
                         <span className="js-product-sku">2710</span>
                      </div>

                      <div className="product-prices on-page">
                         <div className="price js-product-price on-page">12500.00&nbsp;руб</div>
                      </div>

                      <div className="product-control on-page">
                         <div className="counter js-product-quantity">
                            <button type="button" className="counter-button button count-down icon fa fa-minus" onClick={this.dec}>
                            </button>

                            <input type="text" value={this.state.count} className="counter-input input-number input-field" />

                            <button type="button" className="counter-button button count-up icon fa fa-plus" onClick={this.inc}>
                            </button>
                         </div>

                         <div className="buy">
                            <div className="product-order-variant variant-shown js-variant-shown">
                               <button className="product-button button is-primary" type="button" onClick={this.add}>
                                  <i className="icon buy-icon ion-ios-cart-outline"></i>
                                  <span className="button-text">В корзину</span>
                               </button>
                            </div>

                            <div className="product-order-variant variant-hidden js-variant-hidden hide">
                               <p className="notice notice-info">Товар отсутствует</p>
                            </div>

                            <div className="product-order-variant variant-preorder js-variant-preorder hide">
                               <button className="product-button button" type="button">
                                  <i className="icon feedback-icon"></i>
                                  <span className="button-text">Предзаказ</span>
                               </button>
                            </div>
                         </div>

                         <button type="button" className="product-button product-quick-checkout button">Оформить заказ</button>

                         <div className="compare-control text-center-xs">
                            <a href="#" title="Добавить в сравнение" className="compare-link compare-add button is-transparent" >
                               <i className="compare-icon fa fa-bar-chart"></i>
                               <span className="link-text">Добавить в сравнение</span>
                            </a>
                            <a href="#" title="Удалить из сравнения" className="compare-link compare-delete button is-transparent hide">
                               <i className="compare-icon fa fa-check"></i>
                               <span className="link-text">Удалить из сравнения</span>
                            </a>
                         </div>
                      </div>
                   </form>
                </div>
             </div>
          </div>
      )
   }
}

