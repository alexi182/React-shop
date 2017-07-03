import {Link} from 'react-router';

export default function(props) {

   let prefix = props.price.prefix ? `${props.price.prefix} ` : '';
   let price = `${props.price.value} ${props.price.postfix}`;

   return (
       <div className="product-card-wrapper cell-4 cell-6-md cell-12-mc">
          <Link to={props.link}  className="product-card product-link ">
             <div className="card-inner">
                <div className="product-photo">
                   <div className="product-link image-container is-square is-cover">
                      <img src={props.img.src} alt={props.img.alt} title={props.img.title} className="product-image" />
                   </div>
                   <div className="product-prices in-card">
                      <div className="price in-card">
                         {`${prefix}${price}`}
                      </div>
                   </div>
                </div>
                <div className="product-caption">
                   <div className="product-title in-card">
                      {props.name}
                   </div>
                </div>
             </div>
          </Link>
       </div>
   )
}
