import {Link} from 'react-router';
import {autobind} from 'core-decorators';
import * as actions from '../actions/compare';
import { connect } from 'react-redux';

@connect (store => {
   return store.compare
})
@autobind()
export default class ComparePage extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return(
          <div className="page-content">
             <div className="decorated-title-wrapper">
                <div className="decorated-title">
                   <div className="page-header-wrapper">
                      <h1 className="page-header">Сравнение</h1>
                   </div>
                </div>
             </div>

             <div className="compares id=js-compare-wrapper">
                <div id="js-compare-inner">
                   <div className="compare-toolbar">
                      <button className="button is-primary button-same-toggle js-same-toggle" type="button">
                         <span className="link-text show">Скрыть одинаковые <i className="fa fa-eye-slash"></i></span>
                         <span className="link-text hide">Показать одинаковые <i className="fa fa-eye"></i></span>
                      </button>
                   </div>
                   <div className="compare-table-wrapper">
                      <div className="js-compare-table table table-bordered table-compare table-striped">
                         <div className="table-row">
                            <div className="table-cell param-title table-row-title">Товар</div>

                            <div className="table-cell param-value">
                               <div className="product-title">
                                  <Link to={`/product/${item.product.id}`} className="title-link" title= {item.product.name}>
                                     {item.product.name}
                                  </Link>
                               </div>
                            </div>

                         </div>

                         <div className="table-row">
                            <div className="table-cell param-title table-row-title">Фото</div>

                            <div className="table-cell param-value">
                               <div className="compare-image-wrapper">
                                  <a className="compare-image-inner image-container is-square" href="#" title="Apple MacBook Pro">
                                     <img alt="" className="compare-image" src="https://static-eu.insales.ru/images/products/1/771/102007555/medium_1000x1000.jpg" />
                                     // </a>
                               </div>
                            </div>
                         </div>

                         <div className="table-row">
                            <div className="table-cell param-title table-row-title">Диагональ</div>

                            <div className="table-cell param-value">15.4</div>
                         </div>

                         <div className="table-row">
                            <div className="table-cell param-title table-row-title">Грантия</div>

                            <div className="table-cell param-value">1 год</div>
                         </div>

                         <div className="table-row">
                            <div className="table-cell param-title table-row-title">Объем оперативной памяти, Гб</div>

                            <div className="table-cell param-value">16</div>
                         </div>

                         <div className="table-row">

                            <div className="table-cell param-title table-row-title">Видеокарта</div>

                            <div className="table-cell param-value" >встроенная/дискретная Intel® Iris™ Pro graphics 5200</div>

                         </div>

                         <div className="table-row">

                            <div className="table-cell param-title table-row-title"></div>

                            <div className="table-cell param-value compare-controls">
                               <a className="button is-primary" href="#">Подробнее</a>
                               <button className="button is-transparent" title="Удалить из сравнения">Удалить<i className="fa fa-times"></i>
                               </button>
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