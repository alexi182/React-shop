import Service from './service';
import axios from 'axios';
const prefix = '/features';

export default class Features extends Service{
   getAllFeatures(){
      return axios.get(`${super.BaseUrl}${prefix}`).then((response) => {
         if (response && response.data){
            return response.data
         }
      })
   }
}