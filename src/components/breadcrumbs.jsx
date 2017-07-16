export default class BreadCrumbs extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
          <div className="breadcrumb-wrapper">
             <ul className="breadcrumb">
                <li className="breadcrumb-item home">
                   <a className="breadcrumb-link fa fa-home" title='Главная' href="/">&nbsp;</a>
                </li>
                <li className="breadcrumb-item">
                   <span className="breadcrumb-link current-page">Блог</span>
                </li>
             </ul>
          </div>
      );
   }
}