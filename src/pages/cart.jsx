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
   }

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

             <form action="/" method="post" className="shopping-cart">
                <div className="cart-body row">
                   <div className="cart-list cell-12">
                      <div className="cart-item">
                         <div className="cart-item-inner row flex-middle">
                            <div className="item-image-wrapper cell-2 cell-4-sm">
                               <div className="item-image-inner">
                                  <a href="/product/planshet-apple-ipad-mini-with-retina-display" title="Планшет APPLE iPad mini with Retina display (Серый)" className="item-image-link image-container is-square">
                                     <img title="Планшет APPLE iPad mini with Retina display (Серый)" alt="Планшет APPLE iPad mini with Retina display (Серый)" src="https://static-eu.insales.ru/images/products/1/7130/102226906/medium_Без_названия.jpg" className="item-image" />
                                  </a>
                               </div>
                            </div>
                            <div className="item-caption cell-3 cell-8-md">
                               <div className="item-title">
                                  <a href="/product/planshet-apple-ipad-mini-with-retina-display">Планшет APPLE iPad mini with Retina display (Серый)</a>
                               </div>
                               <div className="item-article hide-xs">Артикул: 2703</div>
                            </div>

                            <div className="item-prices in-item cell-2 cell-3-md cell-7-xs">
                               <div className="item-price js-item-price">33985.00&nbsp;руб</div>
                            </div>

                            <div className="item-counter cell-2 cell-3-md cell-5-xs flex-end-xs" data-quantity="">
                               <div className="counter">
                                  <button type="button" data-quantity-change="-1" className="counter-button button button-number count-down">
                                     <i className="icon fa fa-minus"></i>
                                  </button>

                                  <input type="text" value="1" min="1" max="1000" name="cart[quantity][127355267]" className="counter-input input-number input-field" />
                                  <button type="button" data-quantity-change="1" className="counter-button button button-number count-up">
                                     <i className="icon fa fa-plus"></i>
                                  </button>
                               </div>
                            </div>

                            <div className="item-total in-item js-item-total-price cell-2 cell-4-md cell-9-xs">33985.00&nbsp;руб</div>

                            <div className="cell-1 cell-2-md cell-3-xs flex-end">
                               <button type="submit" className="item-delete button is-transparent" data-item-delete="127355267">
                                  <i className="fa fa-remove"></i>
                               </button>
                            </div>
                         </div>

                      </div>
                   </div>
                </div>

                <div className="cart-footer row top js-shopcart-area flex-between">

                   <div className="cell-4 cell-12-sm">
                      <div id="js-coupon-wrapper" className="">
                         <div className="discount-wrapper">
                            <div className="discount-form">
                               <input type="text" placeholder="Есть промо-код?" className="discount-input input-field" name="cart[coupon]" value="" />
                               <button type="submit" className="button discount-button button-primary" data-coupon-submit="">OK</button>
                            </div>
                            <div className="discount-comment-list js-discount-comment-list">
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="cart-control cell-6 cell-12-sm flex-first-xs flex-end flex-center-sm">
                      <div className="total-summ">
                         <span className="summ-caption">Итого:</span>
                         <span className="summ-number js-shopcart-total-summ">33985.00&nbsp;руб</span>
                      </div>

                      <button type="submit" className="cart-checkout button is-primary" data-cart-submit="">Оформить заказ</button>
                   </div>
                </div>

                <input type="hidden" name="_method" value="put" />
                <input type="hidden" name="make_order" value="" />
                <input type="hidden" name="lang" value="ru" />
             </form>

             <div className="notice notice-info text-center js-cart-empty hide">
                Ваша корзина пуста
             </div>
          </div>

      )
   }
}

