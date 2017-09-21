import Service from './service';
import axios from 'axios'; //делать запросы
const product_prefix = '/products';
const features_prefix = '/features';

export default class ProductService extends Service{
   constructor () {
      super();

      // this.url = `${super.BaseUrl}${prefix}`;

      // this.get = (url) => axios.get(`${super.BaseUrl}${prefix}`).then((response) => {
      //    if (response && response.data){
      //       return response.data
      //    }
      // });

   }

   getAllProducts(){
      return axios.get(`${super.BaseUrl}${product_prefix}`).then((response) => {
         if (response && response.data){
            return response.data
         }
      });
   }

   findProduct(id){
      return axios.get(`${super.BaseUrl}${product_prefix}/find/${id}`).then((response) => {
         if (response && response.data){
            return response.data
         }
      });
   }

   getAllFeatures(){
      return axios.get(`${super.BaseUrl}${features_prefix}`).then((response) => {
         if (response && response.data){
            return response.data
         }
      })
   }

   findProductFeature(id){
      return axios.get(`${super.BaseUrl}${features_prefix}/find/${id}`).then((response) => {
         if (response && response.data){
            return response.data
         }
      });
   }
}

