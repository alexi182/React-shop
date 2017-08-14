import Service from './service';
import axios from 'axios';
const prefix = '/products';

export default class ProductService extends Service{
   constructor () {
      this.url = `${super.BaseUrl}${prefix}`;

      this.get = (url) => axios.get(url).then((response) => {
         if (response && response.data){
            return response.data
         }
      });
   }

   getAllProducts(){
      return this.get(this.url);
   }

   findProduct(id){
      return this.get(`${this.url}/find/${id}`);
   }
}