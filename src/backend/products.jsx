import Service from './service';
import axios from 'axios'; //делать запросы
const prefix = '/products';

export default class ProductService extends Service{
   // constructor () {
      // this.url = `${super.BaseUrl}${prefix}`;

      // this.get = (url) => axios.get(`${super.BaseUrl}${prefix}`).then((response) => {
      //    if (response && response.data){
      //       return response.data
      //    }
      // });

   // }

   getAllProducts(){
      return axios.get(`${super.BaseUrl}${prefix}`).then((response) => {
         if (response && response.data){
            return response.data
         }
      });
   }

   findProduct(id){
      return axios.get(`${super.BaseUrl}${prefix}/find/${id}`).then((response) => {
         if (response && response.data){
            return response.data
         }
      });
   }
}

