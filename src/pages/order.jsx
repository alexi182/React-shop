import {Link} from 'react-router';
import {autobind} from 'core-decorators';
import { connect } from 'react-redux';

@connect (store => {
   return store.cart
})
@autobind()
export default class Order extends React.Component{
   constructor(props) {
      super(props);
   }

   render() {
      return (
          <div className="page-content">
             <div className="checkout-v2-wrapper co-section--checkout_content">
                <div className="co-section--checkout_order co-section--checkout_order_sided">
                   <div className="co-section--checkout_header co-checkout-block--padded">
                      <div className="decorated-title-wrapper co-checkout-title">
                         <h1 className="decorated-title co-title co-title--h1">Оформление заказа</h1></div>
                      <div className="co-breadcrumbs">
                         <a href="/" className="link co-breadcrumbs-page">Корзина</a>
                         <span className="co-breadcrumbs-pipe co-icon halfling-menu-right"></span>
                         <span className="co-breadcrumbs-page">Оформление заказа</span></div>
                   </div>
                   <div className="co-sidebar-wrapper">
                      {/*<button className="co-sidebar-toggler js-co-sidebar-toggler"><span>
                       <span className="co-icon halfling-shopping-cart"></span>
                       <span className="co-sidebar-toggler_title">Ваш заказ</span>
                       <span className="co-icon halfling-menu-down"></span></span>
                       <span className="co-price--current">34185&nbsp;руб</span></button>*/}
                      <div className="co-sidebar co-sidebar--hidden@sm js-co-sidebar co-sidebar--fixed">
                         <div className="co-basket co-checkout-block--padded">
                            <div className="co-basket_item-list">

                               <div className="co-basket_item">
                                  <div className="co-basket_item-image_container">
                                     <div className="co-basket_item-image">
                                        <img alt="image" src="https://static-eu.insales.ru/images/products/1/7130/102226906/thumb_Без_названия.jpg" />
                                     </div>
                                  </div>
                                  <div className="co-basket_item-description">Планшет APPLE iPad mini with Retina display (Серый)</div>
                                  <div className="co-basket_item-total"><span className="co-basket_item-count">1</span> x
                                     <span className="co-basket_item-price co-price--current">33985&nbsp;руб</span>
                                  </div>
                               </div>

                            </div>

                            <div className="co-basket_subtotal-list">

                               <div className="co-basket_subtotal">
                                  <div className="co-basket_subtotal-title">Сумма по товарам</div>
                                  <div className="co-basket_subtotal-price co-price--current" id="items_price">33985&nbsp;руб</div>
                               </div>

                               {/*   <div id="discounts-block"></div>
                                <div>
                                <div className="co-basket_subtotal" id="discount-subtotal-sample">
                                <div className="co-basket_subtotal-title discount-subtotal-description"></div>
                                <div className="co-basket_subtotal-price co-price--current discount-subtotal-amount"></div>
                                </div>
                                </div>*/}


                               <div className="co-basket_subtotal">
                                  <div className="co-basket_subtotal-title">Стоимость доставки</div>
                                  <div className="co-basket_subtotal-price co-price--current" id="delivery_price">200&nbsp;руб</div>
                               </div>
                            </div>
                            <div className="co-basket_total">
                               <div className="co-basket_total-title">Итого:</div>
                               <div className="co-basket_total-price co-price--current" id="total_price">34185&nbsp;руб</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <form action="/" className="co-checkout-order_form co-checkout-block--padded ru-mask">
                      <div>
                         <input type="hidden" value="✓" />
                      </div>
                      <div className="co-delivery_method-list co-checkout-block">
                         <div className="co-checkout-block">
                            <div className="co-input co-input--required co-input--tel">
                               <h2 className="co-input-label co-title co-title--h2">Контактный телефон</h2>
                               <input className="co-input-field" />

                               {/* <div className="co-input-description">Уже покупали у нас?
                                <a className="link" href="#">Войдите</a>как клиент
                                </div>*/}

                            </div>
                         </div>
                         <div className="co-checkout-block">
                            <div>
                               <input type="hidden"  value="" />
                            </div>
                            <div className="co-input co-input--required">
                               <h2 className="co-input-label co-title co-title--h2">Населенный пункт</h2>
                               <div className="co-input co-input--required co-input--text">
                                  <input className="co-input-field"  type="text" />

                                  {/*<div className="co-input-notice co-notice--danger">Поле не заполнено</div>*/}
                               </div>

                               {/*<div className="co-input-notice co-notice--danger" id="delivery-location-not-valid">Ошибка! Не удалось определить населенный пункт. Виды и стоимости доставок могут не соответствовать указанному населенному пункту. Чтобы исправить, начните вводить населенный пункт и выберите из появившейся подсказки.</div>*/}

                            </div>
                         </div>
                         <div id="hidden-data" >
                            <input id="default_delivery_variant_id" type="hidden" value="" />
                         </div>
                         <div className="variants delivery_variants co-input co-input--required co-input--radio co-tabs">
                            <h3 className="co-title co-title--h2 co-tabs-header">Способ доставки</h3>
                            <div className="co-tabs-controls" id="delivery-type-switch">
                               <input type="hidden" value="0" />
                               {/*<input id="shipping_address_no_delivery" name="shipping_address[no_delivery]" type="checkbox" value="1" />*/}
                               <button className="co-tabs-node co-tabs-node--active" type="button">Доставка</button>
                               <button className="co-tabs-node" type="button">Самовывоз</button>
                            </div>

                            {/*<div id="deliveries-not-available">Для данного населенного пункта нет подходящих способов доставки</div>*/}

                            <div className="co-tabs-content co-tabs-content--active" id="tabs-need-address">
                               <label className="co-delivery_method co-input-wrapper co-toggable_field co-toggable_field--bordered">

                                  <span className="co-toggable_field-information co-delivery_method-information"><span className="co-delivery_method-title co-toggable_field-title co-input-title">Курьером</span><span className="co-delivery_method-description co-toggable_field-description co-input-description" id="delivery_description_766247"><p>Доставка курьером&nbsp;</p>
                                  </span>
                                     <span className="co-delivery_method-description co-toggable_field-description co-input-description" ></span>
                                     <span className="co-delivery_method-description co-toggable_field-description co-input-description"></span>
                            <div id="delivery_error_766247"></div>
                            </span>
                                  <span className="co-delivery_method-price co-toggable_field-price co-price--current" id="price_766247" data-price="200">+ 200&nbsp;руб</span>
                               </label>
                            </div>
                            <div className="co-tabs-content" id="tabs-pickup">
                               <label className="co-delivery_method co-input-wrapper co-toggable_field co-toggable_field--bordered" for="order_delivery_variant_id_766248">
                                  <span className="co-toggable_field-information">
                                     <span className="co-delivery_method-title co-toggable_field-title co-input-title">Самовывоз</span>
                                     <span className="co-delivery_method-description co-toggable_field-description co-input-description">
                                        <p>На пукнте выдачи</p>
                                     </span>
                                     <span className="co-delivery_method-description co-toggable_field-description co-input-description" id="delivery_interval_766248"></span><span className="co-delivery_method-description co-toggable_field-description co-input-description" id="delivery_details_766248">
                                  </span>
                            <div id="delivery_error_766248"></div>
                            </span>
                                  <span className="co-delivery_method-price co-toggable_field-price co-price--current" >+ 0&nbsp;руб</span>
                               </label>
                            </div>
                         </div>
                         <div className="co-delivery_adress">
                            <h3 className="co-title co-title--h2">Адрес доставки</h3>
                            <div className="co-delivery_adress-form">
                               <div className="co-input co-input--textarea co-input--address co-input--nested co-input--empty_nested">
                                  <label className="co-input-label">Адрес</label>
                                  <textarea className="co-input-field" rows="2" ></textarea>
                                  <div className="co-input-notice co-notice--danger">Поле не заполнено</div>
                               </div>
                            </div>
                         </div>
                         <div className="co-checkout-block">
                            <div className="co-input co-input--textarea">
                               <label className="co-input-label" for="order_comment">
                                  <label for="order_comment">Комментарии к заказу</label>
                               </label>
                               <textarea autocomplite="off" className="co-input-field js-input-field" id="order_comment" name="order[comment]" rows="2"></textarea>
                            </div>
                         </div>
                         <div className="co-customer co-checkout-block co-tabs">
                            <h3 className="co-title co-title--h2 co-tabs-header">Покупатель</h3>

                            {/*<div className="co-tabs-controls co-tabs-controls--customer">*/}
                            {/*<button className="co-tabs-node co-tabs-node--active js-tabs-node--switch" data-target="#tabs-person" type="button">Частное лицо</button>*/}
                            {/*<button className="co-tabs-node js-tabs-node--switch" data-target="#tabs-organization" type="button">Организация</button>*/}
                            {/*</div>*/}

                            <div className="co-tabs-content co-tabs-content--active" id="tabs-person">
                               <input id="client_human_type_individual" type="hidden" value="" />
                               <div className="co-input co-input--required">
                                  <label className="co-input-label" for="client_name">Контактное лицо (ФИО)</label>
                                  <input className="co-input-field" type="text" value="" />
                                  <div className="co-input-notice co-notice--danger">Поле не заполнено</div>
                               </div>
                               <div className="co-input co-input--text co-input--email co-input--nested co-input--empty_nested">
                                  <label className="co-input-label" for="client_email">E-mail</label>
                                  <input className="co-input-field js-input-field" autocomplite="off" type="text" id="client_email" name="client[email]" value="" />
                                  <div className="co-input-notice co-notice--danger">Поле не заполнено</div>
                               </div>
                            </div>
                            <div className="co-tabs-content " id="tabs-organization"></div>
                            <input id="client_registered" name="client[registered]" type="hidden" value="0" />

                            {/*  <div className="co-input co-input--checkbox">
                             <label className="co-toggable_field" for="register">
                             <span className="co-toggable_field-input co-toggable_field-input--checkbox">
                             <input name="client[registered]" type="hidden" value="0" />
                             <input className="co-input-checkbox" id="register" type="checkbox" value="1" />
                             </span>
                             <span className="co-input-information co-toggable_field-information">
                             <span className="co-input-title co-input-label co-toggable_field-title">Стать постоянным покупателем</span>
                             </span>
                             <div className="co-input-description co-toggable_field-description">Вы сможете видеть историю заказов, проще делать новые и получать скидки</div>
                             </label>
                             </div>*/}

                            {/*<div className="co-input co-input--text co-input--required co-input--password not-register co-input--nested co-input--empty_nested">*/}
                            {/*<label className="co-input-label" for="client_password">Пароль</label>*/}
                            {/*<input className="co-input-field js-input-field" id="client_password" name="client[password]" size="30" type="password" />*/}
                            {/*</div>*/}
                            {/*<div className="co-input co-input--text co-input--required co-input--password_confirmation not-register co-input--nested co-input--empty_nested">*/}
                            {/*<label className="co-input-label" for="client_password_confirmation">Повторите пароль</label>*/}
                            {/*<input className="co-input-field js-input-field" id="client_password_confirmation" name="client[password_confirmation]" size="30" type="password" />*/}
                            {/*<div className="co-input-notice co-notice--danger">Пароль не совпадает с подтверждением</div>*/}
                            {/*</div>*/}

                         </div>
                         <div className="variants payment_variants co-payment_method-list co-checkout-block" id="payment_gateways">
                            <div className="co-input co-input--required co-input--radio">
                               <h3 className="co-title co-title--h2 co-input-label">Способ оплаты</h3>
                               <label className="co-payment_method co-input-wrapper co-toggable_field co-toggable_field--bordered" for="order_payment_gateway_id_478487">
                                  <span className="co-payment_method-input co-toggable_field-input co-toggable_field-input--radio">
                                  <input checked="checked" className="radio_button js-input-field" data-payment-id="478487" data-payment-position="1" id="order_payment_gateway_id_478487" name="order[payment_gateway_id]"  type="radio" value="478487" /></span>
                                  <span className="co-payment_method-information co-toggable_field-information">
                                  <span className="co-payment_method-title co-toggable_field-title co-input-title">Наличным курьеру</span>
                                  <span className="co-payment_method-description co-toggable_field-description co-input-description">Наличными курьеру</span>
                               </span>
                                  <span className="co-toggable_field-price co-price--current" id="summ_478487" data-price="0">0&nbsp;руб</span></label>
                               <div id="payments-not-available">Для данного способа доставки нет подходящих способов оплаты</div>
                            </div>
                         </div>
                         <div id="checkout_result_fields"></div>
                         <div id="checkout_buyer_fields"></div>
                      </div>
                      <div className="row center">
                         <button className="co-button co-button--checkout js-button-checkout_submit" id="create_order" type="submit">Подтвердить заказ</button>
                         <div className="consent_to_personal_data_checkbox"></div>
                      </div>
                   </form>
                   <div id="picker-container"></div>
                   <div className="co-modal co-modal--login co-modal--fixed co-modal--hide">
                    {/*  <div className="co-modal-wrapper">
                         <button className="co-modal-close co-icon halfling-remove js-modal-close"></button>
                         <h3 className="co-modal-title co-title co-title--h2">Для постоянных покупателей</h3>
                         <div className="co-form--login co-modal-login_form">
                            <div className="co-input co-input--required co-input--email">
                               <input className="co-input-field js-input-field" placeholder="E-mail" type="email" />
                            </div>
                            <div className="co-input co-input--required co-input--password">
                               <input className="co-input-field js-input-field" placeholder="Пароль" type="password" />
                               <div className="co-input-notice co-notice--danger">Сочетание логина и пароля не подходит</div>
                            </div>
                            <button className="co-modal-button co-button js-modal-submit--login" type="submit">Войти</button><a href="/client_account/password/change" className="co-button--password_recover">Восстановить пароль</a></div>
                      </div>*/}
                   </div>
                   <div className="co-overlay"></div>
                </div>
             </div>
          </div>
      )
   }
}


