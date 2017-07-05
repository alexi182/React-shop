import Menu from '../components/menu/menu';
import MenuContainer from '../components/menu/menu-container';
import MenuItem from '../components/menu/menu-item';

export default class Footer extends React.Component {
   render() {
      return (
          <footer className="footer">
             <div className="container">
                <div className="row">

                   <MenuContainer classList="footer-block footer-menu-wrapper cell-3 cell-12-sm" isVertical={true}>
                      <Menu menuType={'footer'}>
                         <MenuItem name={'Доставка'} href={'/delivery'} />
                         <MenuItem name={'Оплата'} href={'/payment'} />
                         <MenuItem name={'Статьи'} href={'/posts'} />
                         <MenuItem name={'Контакты'} href={'/contacts'} />
                      </Menu>
                   </MenuContainer>

                   <div className="footer-block social-menu-wrapper cell-6 cell-12-sm cell-12-xs flex-first-sm text-center">
                   </div>

                   <div className="cell-3 cell-6-sm cell-12-xs text-right text-left-sm text-center-xs">
                      <div className="footer-block">
                         <a href="tel:+7 495 123-45-67" className="contact-link">
                            <i className="icon fa fa-phone"></i> +7 495 123-45-67
                         </a>
                      </div>
                      <div className="footer-block">
                         <a href="mailto:sales@myshop.ru" className="contact-link">
                            <i className="icon fa fa-envelope"></i>
                            sales@myshop.ru
                         </a>
                      </div>
                   </div>

                   <div className="footer-block cell-6 cell-12-xs text-right-sm text-center-xs">
                      <p>Интернет-магазин на теме Нейрон</p>
                   </div>

                   <div className="footer-block insales-copyright cell-6 cell-12-sm text-right text-center-sm">
                      <a href="http://www.insales.ru" target="_blank">Сделано в InSales</a>
                   </div>
                </div>
             </div>
          </footer>
      );
   }
}


