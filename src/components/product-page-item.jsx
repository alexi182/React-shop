import BreadCrumbs from '../components/breadcrumbs';
import App from './tabs-item';
import {autobind} from 'core-decorators';
import * as compareActions from '../actions/compare';
import * as cartActions from '../actions/cart';
import * as productActions from '../actions/product';
import { connect } from 'react-redux';

@connect (store => {
   return {
      compare: store.compare,
      product: store.product,
   }
})
@autobind
export default class ProductPageItem extends React.Component {
   constructor(props) {
      super(props);
      console.log(props);

      /*this.product = this.props.product.products.find(p => p.id == this.props.params.id);*/

      this.state = {
         count: 1,
         color: 1,
         active: true,
         /* isFound: false*/
      };
   }

   componentDidMount() {
      this.props.dispatch(productActions.getProduct(this.props.params.id))
   }

   add() {
      let toDispatch = cartActions.add(this.props.product.product, this.state.count);
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

   compare(e) {
      e.preventDefault();
      let toDispatch = compareActions.compare(this.props.product.product);
      this.props.dispatch(toDispatch);
   }

   remove(e) {
      e.preventDefault();
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

   clickTab(index, e) {
      e.preventDefault();

      this.setState({
         active: this.state.active,
      })
   }

   render() {
      if (!this.props.product.product || this.props.product.isFinding){
         return (
             <div>
                Product is finding
             </div>
         )
      }
      let product = this.props.product.product;
      let filterActiveClass = this.state.active ? "is-active" : "is-closed";
      let filterDisActiveClass = !this.state.active ? "is-closed" : "is-active";
      let filterContent = this.state.active ? "is-active" : "is-closed";
      let isInCompare =  !!this.props.compare.compare.find(p => p.id == this.props.params.id);

      return (
          <div className="page-content">
             <BreadCrumbs />

             <div className="decorated-title-wrapper">
                <div className="decorated-title">
                   <div className="page-header-wrapper">
                      <h1 className="page-header">
                         {product.name}
                      </h1>
                   </div>
                </div>
             </div>

             <div className="row">

                <div className="product-gallery-wrapper cell-5 cell-12-sm">
                   <div className="product-gallery">
                      <div className="gallery-main-wrapper text-center hide-sm">
                         <a href={product.img.src} id="gallery">
                            <img src={product.img.src} />
                         </a>
                      </div>
                   </div>
                </div>

                <div className="product-content-wrapper cell-7 cell-12-sm">

                   {/*<App/>*/}

                   <div className="product-introtext on-page editor">
                      {product.description}
                   </div>

                   {(product.id) ?
                       <form className="product-form" action="#">
                          <div className="option-selectors">
                             <div className="option-selector">
                                <div className="option option-cvet is-select">
                                   <label className="option-label">Цвет</label>
                                   <select value={this.state.color} onChange={this.handleChange} className="option-values">
                                      {product.color.map((p, index) =>
                                          <option value={p.id} key={index}>{p.name}</option>
                                      )}
                                   </select>
                                </div>
                             </div>
                          </div>

                          <div className="product-sku-wrapper js-product-sku-wrapper">
                             <span>Артикул:</span>
                             <span className="js-product-sku">{product.articul}</span>
                          </div>

                          <div className="product-prices on-page">
                             <div className="price js-product-price on-page">{product.price.value} руб.</div>
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

                                <div className="product-order-variant variant-preorder js-variant-preorder hide">
                                   <button className="product-button button" type="button">
                                      <i className="icon feedback-icon"></i>
                                      <span className="button-text">Предзаказ</span>
                                   </button>
                                </div>
                             </div>

                             <button type="button" className="product-button product-quick-checkout button">Оформить заказ</button>

                             <div className="compare-control text-center-xs">
                                {(isInCompare) ?
                                    <a href="#" title="Удалить из сравнения" className="compare-link compare-delete button is-transparent">
                                       <i className="compare-icon fa fa-check"></i>
                                       <span className="link-text" onClick={this.remove}>Удалить из сравнения</span>
                                    </a>:
                                    <a href="#" title="Добавить в сравнение" className="compare-link compare-add button is-transparent" onClick={this.compare}>
                                       <i className="compare-icon fa fa-bar-chart"></i>
                                       <span className="link-text">Добавить в сравнение</span>
                                    </a>}
                             </div>
                          </div>
                       </form> :
                       <div className="product-order-variant variant-hidden js-variant-hidden">
                          <p className="notice notice-info">Товар отсутствует</p>
                       </div> }
                </div>

                <div className="cell-12">
                   <div className="product-content">
                      <div className="tabs-menu-wrapper">
                         <ul className="tabs-menu product-tabs-list">
                            <li className={`tabs-menu-item ${filterActiveClass}`} onClick={this.clickTab}>
                               <a href="#" className="tabs-menu-link">Описание</a>
                            </li>
                            <li className={`tabs-menu-item ${filterDisActiveClass}`} onClick={this.clickTab}>
                               <a href="#product-characteristics" className="tabs-menu-link">Характеристики</a>
                            </li>
                         </ul>
                      </div>

                      <div className="tabs-list product-tabs-list">
                         <div id="product-description" className={`tab-block ${filterContent}`}> {/*is-active*/}
                            <div className="editor">
                               <p>{product.name}</p>
                               <p>{product.fullDescription}
                                  <br/><br/>
                               </p>
                            </div>
                         </div>

                         <div id="product-characteristics" className={`tab-block ${filterContent}`}> {/*is-closed*/}
                            <div className="editor">
                               <table className="table table-bordered table-striped table-hover">
                                  <tbody>
                                  {product.features.map((p, index) =>
                                      <tr key={index}>
                                         <td>{p.name}</td>
                                         <td>{p.value}</td>
                                      </tr>
                                  )}
                                  </tbody>
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

