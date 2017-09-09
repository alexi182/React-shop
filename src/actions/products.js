import ProductService from '../backend/products';
import * as productConstants from '../constansts/products';
import * as featureConstants from '../constansts/feature';
const productService = new ProductService();

function findProduct(id) {
   return {
      type: productConstants.FIND,
      payload: productService.findProduct(id)

   }
}

function findProductFeature(id) {
   return {
      type: featureConstants.FIND,
      payload: productService.findProductFeature(id)
   }
}

function getProducts() {
   return {
      type: productConstants.GET,
      payload: productService.getAllProducts()
   }
}

export {findProduct, findProductFeature, getProducts}