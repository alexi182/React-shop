import ProductService from '../backend/products';
import * as productConstants from '../constansts/product';
const productService = new ProductService();

function getProduct(id) {
   return {
      type: productConstants.GET,
      payload: productService.findProduct(id)
   }
}

export {getProduct}