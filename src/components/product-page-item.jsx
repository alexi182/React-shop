import BreadCrumbs from '../components/breadcrumbs';
const products = require('../json/products.json');

export default class ProductPageItem extends React.Component{
   constructor(props) {
      super(props);
      console.log(this.props);
   }

   render() {
      return (
          <div className="page-content">
             <BreadCrumbs />

             <div className="decorated-title-wrapper">
                <div className="decorated-title">
                   <div className="page-header-wrapper">
                      <h1 className="page-header">
                         {JSON.parse(products.name)}

                      </h1>
                   </div>
                </div>
             </div>

             <div className="row">
                <div className="product-content-wrapper cell-7 cell-12-sm">
                   <div className="product-introtext on-page editor">Планшет Samsung Galaxy Tab 3 Lite доступен по демократичной цене, особенно приятной для устройства данной марки. Это бюджетный вариант предыдущей, третьей, версии девайса, не уступающий ей в функциональности. Модель качественно собрана, оснащена семидюймовым дисплеем с разрешением 1024х600 пикселей и производительным двухъядерным процессором. Она предназначена для комфортного веб-серфинга, общения, развлечений и станет отличным выбором для активного пользователя</div>

                   <form className="product-form" action="/cart_items">
                      <div className="option-selectors">
                         <div className="option-selector">
                            <div className="option option-cvet is-select">
                               <label className="option-label">Цвет</label>
                               <select className="option-values">
                                  <option value="0" selected="selected">Черный</option>
                                  <option value="4">Белый</option>
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
                         <div className="counter js-product-quantity" data-quantity="">
                            <button type="button" className="counter-button button count-down icon fa fa-minus">
                            </button>

                            <input type="text" value="1" min="1" max="1000" name="quantity" className="counter-input input-number input-field" />

                            <button type="button" data-quantity-change="1" className="counter-button button count-up icon fa fa-plus">
                            </button>
                         </div>

                         <div className="buy">
                            <div className="product-order-variant variant-shown js-variant-shown">
                               <button className="product-button button is-primary" type="submit">
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

                         <button type="button" className="product-button product-quick-checkout button" >Оформить заказ</button>

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

