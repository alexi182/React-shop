const url = 'http://localhost:8085/api';

export default class Service{  //базовый класс для сервисов, писать запросы, обработки запросов
   get BaseUrl() {   //метод
      return url;
   }
}