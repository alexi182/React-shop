export default class IndexPage extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="page-inner-content">
            <div className="image-block">
               <img src={require('../images/pic2.jpg')} />
            </div>

            <div className="decorated-title-wrapper">
               <div className="decorated-title">
                  <div className="page-header-wrapper">
                     <h1 className="page-header">Интернет-магазин на теме Нейрон</h1>
                  </div>
               </div>
            </div>

            <div className="editor">
               <p>
                  <img className="editor__pic" src={require('../images/pic1.jpg')} />
                  <br/><br/><span>InSales - это готовое решение для создания интернет-магазинов без необходимости вникать в технические тонкости создания сайта.</span>
               </p>
               <p><span>Весь необходимый функционал для интернет-магазина уже есть внутри. InSales не нужно дорабатывать, устанавливать на хостинг, создавать и настраивать базу данных - все уже настроено и работает, достаточно просто зарегистрироваться на <a href="https://www.insales.ru" target="_blank">insales.ru</a>
                         </span>, загрузить в созданный магазин свои товары, настроить способы доставки и оплаты, прикрепить свой домен к сайту и можно стартовать продажи.&nbsp;<br/><br/>Примеры ссылок на категории в тексте:
                  <a href="#" className="editor__link">Телевизоры</a>
                  <a href="#" className="editor__link">Планшеты</a>
                  <a href="#" className="editor__link">Ноутбуки</a>
                  <a href="#" className="editor__link">Фотоаппараты</a>
               </p>
               <p>Каталог наполнен несколькими товарами для демонстрации возможностей платформы <a href="http://www.insales.ru">InSales</a>. Изменить структуру, удалить демонстрационные товары и добавить свои вы можете в разделе Товары -&gt; Каталог на сайте.</p>
               <p>Для перехода в административный раздел (бэк-офис) интернет-магазина нажмите на ссылку <a href="#">Вход с паролем</a> внизу страницы.</p>
               <p>Отредактировать эту страницу Вы можете в разделе Сайт-&gt;Меню и страницы. Сменить дизайн магазина Вы можете в разделе Сайт -&gt; Дизайн</p>
            </div>
         </div>
      );
   }
}