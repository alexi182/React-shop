import {Link} from 'react-router';
import {autobind} from 'core-decorators';
import * as actions from '../actions/cart';
import { connect } from 'react-redux';

@connect (store => {
   return store.cart
})
@autobind()
export default class Cart extends React.Component{
   constructor(props) {
      super(props);

      this.state = {
         count: 1
      }
   }

   remove=(id) => () => {
      let toDispatch = actions.remove(id);
      this.props.dispatch(toDispatch);
   };

   inc=(id) => () =>  {
      let toDispatch = actions.inc(id);
      this.props.dispatch(toDispatch);
   };

   dec=(id) => () =>  {
      let toDispatch = actions.dec(id);
      this.props.dispatch(toDispatch);
   };

   render() {
      return (
          <div className="page-content">
             <div className="decorated-title-wrapper">
                <div className="decorated-title">
                   <div className="page-header-wrapper">
                      <h1 className="page-header">Корзина</h1>
                   </div>
                </div>
             </div>

             {(this.props.cart.length) ?

             <form className="shopping-cart">

                <div className="cart-body row">
                   <div className="cart-list cell-12">
                      {this.props.cart.map((item, index) =>
                          <div className="cart-item" key={index}>
                             <div className="cart-item-inner row flex-middle">
                                <div className="item-image-wrapper cell-2 cell-4-sm">
                                   <div className="item-image-inner">
                                      <Link to={`/product/${item.product.id}`} title={item.product.name} className="item-image-link image-container is-square">
                                         {<img src={item.product.img.src} alt={item.product.name}
                                               title={item.product.name} className="item-image" />}
                                      </Link>
                                   </div>
                                </div>
                                <div className="item-caption cell-3 cell-8-md">
                                   <div className="item-title">
                                      <Link to={`/product/${item.product.id}`} title={item.product.name}>
                                         {item.product.name}
                                      </Link>
                                   </div>
                                   <div className="item-article hide-xs">Артикул: {item.product.art}</div>
                                </div>

                                <div className="item-prices in-item cell-2 cell-3-md cell-7-xs">
                                   <div className="item-price js-item-price">{`${item.product.price.value} руб`}</div>
                                </div>

                                <div className="item-counter cell-2 cell-3-md cell-5-xs flex-end-xs" data-quantity="">
                                   <div className="counter">
                                      <button type="button" className="counter-button button button-number count-down" onClick={this.dec(item.product.id)}>
                                         <i className="icon fa fa-minus"></i>
                                      </button>

                                      <input type="text" className="counter-input input-number input-field" value={item.count} />

                                      <button type="button" className="counter-button button button-number count-up" onClick={this.inc(item.product.id)}>
                                         <i className="icon fa fa-plus"></i>
                                      </button>
                                   </div>
                                </div>

                                <div className="item-total in-item js-item-total-price cell-2 cell-4-md cell-9-xs">{`${item.count*item.product.price.value} руб`}</div>

                                <div className="cell-1 cell-2-md cell-3-xs flex-end">
                                   <button type="button" className="item-delete button is-transparent" onClick={this.remove(item.product.id)}>
                                      <i className="fa fa-remove"></i>
                                   </button>
                                </div>
                             </div>
                          </div>
                      )}
                   </div>
                </div>

                <div className="cart-footer row top js-shopcart-area flex-between">
                   <div className="cell-4 cell-12-sm">
                      <div id="js-coupon-wrapper" className="">
                         <div className="discount-wrapper">
                            <div className="discount-form">
                               <input type="text" placeholder="Есть промо-код?" className="discount-input input-field" name="cart[coupon]" value="" />
                               <button type="button" className="button discount-button button-primary">OK</button>
                            </div>
                            <div className="discount-comment-list js-discount-comment-list">
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="cart-control cell-6 cell-12-sm flex-first-xs flex-end flex-center-sm">
                      <div className="total-summ">
                         <span className="summ-caption">Итого:</span>
                         <span className="summ-number js-shopcart-total-summ">{`${this.props.sum}  руб`}</span>
                      </div>

                      <button type="submit" className="cart-checkout button is-primary" data-cart-submit="">Оформить заказ</button>
                   </div>
                </div>

                <input type="hidden" name="_method" value="put" />
                <input type="hidden" name="make_order" value="" />
                <input type="hidden" name="lang" value="ru" />
             </form> :
                 <div className="notice notice-info text-center js-cart-empty">
                Ваша корзина пуста
             </div>
             }
          </div>
      )
   }
}

