import Service from './service';
import axios from 'axios';
const prefix = '/products';

export default class ProductService extends Service{
   constructor (props) {
      super(props);
      // this.url = `${super.BaseUrl}${prefix}`;
      //
      // this.get = (url) => axios.get(url).then((response) => {
      //    if (response && response.data){
      //       return response.data
      //    }
      // });
   }

   getAllProducts(){
      // return this.get(this.url);
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