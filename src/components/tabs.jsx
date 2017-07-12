import {autobind} from 'core-decorators';

const TabsContent = (props) => {

};

export default class Tabs extends React.Component {
   render() {
      return (
          <div className="index-block title-collections">
             <div className="tabs-menu-wrapper">
                <ul className="tabs-menu collections-tabs">
                   <li className="tabs-menu-item active is-closed">
                      <a className="tabs-menu-link" href="#" data-toggle="tabs">Саунд-системы</a>
                   </li>
                   <li className="tabs-menu-item is-active">
                      <a className="tabs-menu-link" href="#" data-toggle="tabs">Телевизоры</a>
                   </li>
                </ul>
             </div>
             <div className="tabs-list collections-list">
                <div className="tab-block active is-closed" id="domashnie-kinoteatry">
                   <div className="products-list in-tab row">
                      <div className="title-collections-product cell-3 cell-6-sm cell-12-mc">
                         <a href="#" className="product-card product-link">
                            <div className="card-inner">
                               <div className="product-photo">
                                  <div className="product-link image-container is-square is-cover">
                                     <img src="https://static-eu.insales.ru/images/products/1/2862/102247214/large_1000x1000.jpg" alt="" title="" className="product-image" />
                                  </div>
                                  <div className="product-prices in-card">
                                     <div className="price in-card">17569&nbsp;руб </div>
                                  </div>
                               </div>
                               <div className="product-caption">
                                  <div className="product-title in-card">Philips HTB3520G Black 3D Blu-ray Домашний кинотеатр 5.1 </div>
                               </div>
                            </div>
                         </a>
                      </div>
                      <div className="title-collections-product cell-3 cell-6-sm cell-12-mc">
                         <a href="#" className="product-card product-link ">
                            <div className="card-inner">
                               <div className="product-photo">
                                  <div className="product-link image-container is-square is-cover"><img src="https://static-eu.insales.ru/images/products/1/6651/101931515/large_1000x1000.jpg" alt="" title="" className="product-image" />
                                  </div>
                                  <div className="product-labels labels-list"><span className="label label-discount">10% </span></div>
                                  <div className="product-prices in-card">
                                     <div className="price in-card">44999&nbsp;руб </div>
                                  </div>
                               </div>
                               <div className="product-caption">
                                  <div className="product-title in-card">Sony BDV-N9200W Black 3D Blu-ray Домашний кинотеатр 5.1 </div>
                               </div>
                            </div>
                         </a>
                      </div>
                      <div className="title-collections-product cell-3 cell-6-sm cell-12-mc">
                         <a href="#" className="product-card product-link ">
                            <div className="card-inner">
                               <div className="product-photo">
                                  <div className="product-link image-container is-square is-cover"><img src="https://static-eu.insales.ru/images/products/1/7119/101931983/large_1000x1000.jpg" alt="" title="" className="product-image" />
                                  </div>
                                  <div className="product-prices in-card">
                                     <div className="price in-card">17000&nbsp;руб </div>
                                  </div>
                               </div>
                               <div className="product-caption">
                                  <div className="product-title in-card">Philips HTD3570/51 Black Домашний кинотеатр 5.1 </div>
                               </div>
                            </div>
                         </a>
                      </div>
                      <div className="title-collections-product cell-3 cell-6-sm cell-12-mc">
                         <a href="#" className="product-card product-link ">
                            <div className="card-inner">
                               <div className="product-photo">
                                  <div className="product-link image-container is-square is-cover"><img src="https://static-eu.insales.ru/images/products/1/759/101933815/large_1000x1000.jpg" alt="" title="" className="product-image" />
                                  </div>
                                  <div className="product-labels labels-list"><span className="label label-discount">18% </span></div>
                                  <div className="product-prices in-card">
                                     <div className="price in-card">32989&nbsp;руб </div>
                                  </div>
                               </div>
                               <div className="product-caption">
                                  <div className="product-title in-card">Samsung HT-H6550WK Black 3D Blu-ray Домашний кинотеатр 4.1 </div>
                               </div>
                            </div>
                         </a>
                      </div>
                   </div>
                   <div className="tab-block-toolbar text-right"><a href="#" className="button">Подробнее </a></div>
                </div>
                <div className="tab-block is-active" id="3d-televizory">
                   <div className="products-list in-tab row">
                      <div className="title-collections-product cell-3 cell-6-sm cell-12-mc">
                         <a href="#" className="product-card product-link ">
                            <div className="card-inner">
                               <div className="product-photo">
                                  <div className="product-link image-container is-square is-cover"><img src="https://static-eu.insales.ru/images/products/1/3560/101912040/large_1000x1000.jpg" alt="" title="" className="product-image" />
                                  </div>
                                  <div className="product-prices in-card">
                                     <div className="price in-card">259989&nbsp;руб </div>
                                  </div>
                               </div>
                               <div className="product-caption">
                                  <div className="product-title in-card">Sony KD-65XD9305 3D LED-телевизор </div>
                               </div>
                            </div>
                         </a>
                      </div>
                      <div className="title-collections-product cell-3 cell-6-sm cell-12-mc">
                         <a href="#" className="product-card product-link ">
                            <div className="card-inner">
                               <div className="product-photo">
                                  <div className="product-link image-container is-square is-cover"><img src="https://static-eu.insales.ru/images/products/1/6786/101915266/large_1000x1000.jpg" alt="" title="" className="product-image" />
                                  </div>
                                  <div className="product-labels labels-list"><span className="label label-discount">20% </span></div>
                                  <div className="product-prices in-card">
                                     <div className="price in-card">159989&nbsp;руб </div>
                                  </div>
                               </div>
                               <div className="product-caption">
                                  <div className="product-title in-card">LG OLED55C6V 3D OLED-телевизор </div>
                               </div>
                            </div>
                         </a>
                      </div>
                      <div className="title-collections-product cell-3 cell-6-sm cell-12-mc">
                         <a href="#" className="product-card product-link ">
                            <div className="card-inner">
                               <div className="product-photo">
                                  <div className="product-link image-container is-square is-cover"><img src="https://static-eu.insales.ru/images/products/1/7183/101915663/large_1000x1000.jpg" alt="" title="" className="product-image" />
                                  </div>
                                  <div className="product-prices in-card">
                                     <div className="price in-card">159989&nbsp;руб </div>
                                  </div>
                               </div>
                               <div className="product-caption">
                                  <div className="product-title in-card">Sony KD55XD9305 3D LED-телевизор </div>
                               </div>
                            </div>
                         </a>
                      </div>
                      <div className="title-collections-product cell-3 cell-6-sm cell-12-mc">
                         <a href="#" className="product-card product-link ">
                            <div className="card-inner">
                               <div className="product-photo">
                                  <div className="product-link image-container is-square is-cover"><img src="https://static-eu.insales.ru/images/products/1/758/101917430/large_1000x1000.jpg" alt="" title="" className="product-image" />
                                  </div>
                                  <div className="product-prices in-card">
                                     <div className="price in-card">299989&nbsp;руб </div>
                                  </div>
                               </div>
                               <div className="product-caption">
                                  <div className="product-title in-card">LG OLED 3D OLED-телевизор </div>
                               </div>
                            </div>
                         </a>
                      </div>
                   </div>
                   <div className="tab-block-toolbar text-right">
                      <a href="#" className="button">Подробнее </a>
                   </div>
                </div>
             </div>
          </div>
      )
   }
}


