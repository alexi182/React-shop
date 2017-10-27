import { Router, Route, browserHistory, Redirect } from 'react-router';
import Layout from './layout/layout';
import Index from './pages/index';
import HomeTheatre from './pages/catalog/hometheatre';
import Tablet from './pages/catalog/tablet';
import Notes from './pages/catalog/notes';
import Payment from './pages/menu/payment';
import Photos from './pages/catalog/photos';
import ProductPage from './components/product-page';
import ProductPageItem from './components/product-page-item';
import Cart from './pages/cart';
import Order from './pages/order';
import Compare from './pages/compare';
import NotFoundPage from './pages/notfound';
import './vendors';

import { Provider } from 'react-redux';
import store from './stores/store';

let page = document.getElementById('page');

ReactDOM.render(
    <Provider store={store} >
       <Router history={browserHistory}>
          <Route component={Layout} >
             <Route path="/" component={Index} />
             <Route path="/collection" component={ProductPage} >
                <Route path="theatres" component={HomeTheatre} />
                <Route path="tablets" component={Tablet} />
                <Route path="notes" component={Notes} />
                <Route path="photos" component={Photos} />
                <Redirect from="*" to="/" />
             </Route>
             <Route path="/order" component={Order} />
             <Route path="/compare" component={Compare} />
             <Route path="/cart" component={Cart} />
             <Route path="/payment" component={Payment} />
             <Route path="/product/:id" component={ProductPageItem} />
          </Route>
          <Redirect from="*" to="/notfound" component={NotFoundPage} />
       </Router>
    </Provider>
    , page);



