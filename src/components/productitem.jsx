import {Link} from 'react-router';

export default function(props) {

   let prefix = props.product.price.prefix ? `${props.product.price.prefix} ` : '';
   let price = `${props.product.price.value} ${props.product.price.postfix}`;

   return (
       <div className="product-card-wrapper cell-4 cell-6-md cell-12-mc">
          <Link to={props.product.link} className="product-card product-link">
             <div className="card-inner">
                <div className="product-photo">
                   <div className="product-link image-container is-square is-cover">
                      <img src={props.product.img.src} alt={props.product.img.alt} title={props.product.img.title} className="product-image" />
                   </div>
                   <div className="product-prices in-card">
                      <div className="price in-card">
                         {`${prefix}${price}`}
                      </div>
                   </div>
                </div>
                <div className="product-caption">
                   <div className="product-title in-card">
                      {props.product.name}
                   </div>
                </div>
             </div>
          </Link>
       </div>
   )
}
