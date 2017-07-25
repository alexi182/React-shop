import BreadCrumbs from '../components/breadcrumbs';
import {autobind} from 'core-decorators';
import * as actions from '../actions/cart';
import { connect } from 'react-redux';
const products = require('../json/products.json');

@connect (store => {
   return {}
})
@autobind
export default class ProductPageItem extends React.Component {
   constructor(props) {
      super(props);
      console.log(props);

      this.product = products.find(p => p.id == this.props.params.id);

      this.state = {
         count: 1,
         color: 1
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

   handleChange(e) {
      this.setState({
         color: e.target.value
      })
   }

   setCount(e) {
      this.setState({
         count: +e.target.value
      })
   }

   tabs() {

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

                <div className="product-gallery-wrapper cell-5 cell-12-sm">
                   <div className="product-gallery">
                      <div className="gallery-main-wrapper text-center hide-sm">
                         <a href={this.product.img.src} id="gallery">
                            <img src={this.product.img.src} />
                         </a>
                      </div>
                   </div>
                </div>

                <div className="product-content-wrapper cell-7 cell-12-sm">
                   <div className="product-introtext on-page editor">
                      {this.product.description}
                   </div>

                   <form className="product-form" action="#">
                      <div className="option-selectors">
                         <div className="option-selector">
                            <div className="option option-cvet is-select">
                               <label className="option-label">Цвет</label>
                               <select value={this.props.color} onChange={this.handleChange} className="option-values">
                                  { this.product.color.map((p, index) =>
                                      <option value={p.id} key={index}>{p.name}</option>
                                  )}
                               </select>
                            </div>
                         </div>
                      </div>

                      <div className="product-sku-wrapper js-product-sku-wrapper">
                         <span>Артикул:</span>
                         <span className="js-product-sku">{this.product.art}</span>
                      </div>

                      <div className="product-prices on-page">
                         <div className="price js-product-price on-page">{this.product.price.value}&nbsp;руб.</div>
                      </div>

                      <div className="product-control on-page">
                         <div className="counter js-product-quantity">
                            <button type="button" className="counter-button button count-down icon fa fa-minus" onClick={this.dec}>
                            </button>

                            <input type="text" value={this.state.count} className="counter-input input-number input-field" onChange={this.setCount} />

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

                <div className="cell-12">
                   <div className="product-content">
                      <div className="tabs-menu-wrapper">
                         <ul className="tabs-menu product-tabs-list">
                            <li className="tabs-menu-item is-active" onClick={this.tabs}>
                               <a href="#" className="tabs-menu-link">Описание</a>
                            </li>
                            <li className="tabs-menu-item is-closed" onClick={this.tabs}>
                               <a href="#product-characteristics" className="tabs-menu-link">Характеристики</a>
                            </li>
                         </ul>
                      </div>
                      <div className="tabs-list product-tabs-list">

                         <div id="product-description" className="tab-block is-active">
                            <div className="editor">
                               <p>{this.product.name}</p>
                               <p>{this.product.description}
                                  <br/><br/>
                               </p>
                            </div>
                         </div>

                         <div id="product-characteristics" className="tab-block is-closed">
                            <div className="editor">
                               <table className="table table-bordered table-striped table-hover">
                                  <tr>
                                     <td>Диагональ</td>
                                     <td>8</td>
                                  </tr>
                                  <tr>
                                     <td>Wi-Fi соединение</td>
                                     <td>да</td>
                                  </tr>
                                  <tr>
                                     <td>Объем оперативной памяти, Гб</td>
                                     <td>16</td>
                                  </tr>
                               </table>
                            </div>
                         </div>

                      </div>
                   </div>
                </div>

             </div>
          </div>
      )
   }
}

