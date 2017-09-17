import {Link} from 'react-router';
import {autobind} from 'core-decorators';
import * as actions from '../actions/compare';
import { connect } from 'react-redux';

const TableView = (props) => {

 /*  const names = [
      'name','img',
   ];*/

   let Table = {};
   let num = props.compare.length;

   for (let p of props.compare) {
      for(let o of p.features) {
         if (!Table[o.name]){ // если в Table нету свойства o.name
            Table[o.name] = []; //создаём в table пустой массив по свойству или ключу o.name
         }
         Table[o.name].push(o.value); //кладём значения в этот массив с ключом o.name
      }
      if (!Table['имя']){
         Table['имя'] = [];
      }
      if (!Table['картинка']){
         Table['картинка'] = [];
      }
      Table['имя'].push({
         id: p.id,
         name: p.name
      });
      Table['картинка'].push(p.img)

   }

   let rows =[];
   let index = 0;
   for(let prop in Table) {
      let item = Table[prop]; //массив выводимых свойств таблицы
      if (item.length !== num) {
         let c = num - item.length;
         for(let i=0; i<c; i++) {
            item.push('');
         }
      }

      let div = <div className="table-row">
         <div className="table-cell param-title table-row-title">{prop}</div>
         {
            item.map((p,index) =>
                <div className="table-cell param-value" key={index}>
                   {
                      prop == 'имя' ?
                          <div className="product-title">
                             <Link to={`/product/${p.id}`}>
                                {p.name}
                             </Link>
                          </div>: null
                   }
                   {
                      prop == 'картинка' ? <img src={p.src} alt={p.alt} title={p.title} />: null
                   }
                   {prop !== 'имя' && prop!== 'картинка' ? p : null}
                </div>
            )
         }
      </div>;

       if(prop == 'имя') {
          rows.unshift(div);
       }  else if (prop == 'картинка') {
          rows.splice(1,0,div);
       }  else {
          rows.push(div);
       }

       rows.

      index ++
   }

   return (
       <div className="compare-table-wrapper">
          <div className="js-compare-table table table-bordered table-compare table-striped">
             {rows}
          </div>
       </div>
   )
};

@connect (store => {
   return store.compare
})

@autobind()
export default class ComparePage extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return(
          <div className="page-content">
             <div className="decorated-title-wrapper">
                <div className="decorated-title">
                   <div className="page-header-wrapper">
                      <h1 className="page-header">Сравнение</h1>
                   </div>
                </div>
             </div>

             <div className="compares" id="js-compare-wrapper">
                <div id="js-compare-inner">
                   <div className="compare-toolbar">
                      <button className="button is-primary button-same-toggle js-same-toggle" type="button">
                         <span className="link-text show">Скрыть одинаковые <i className="fa fa-eye-slash"></i></span>
                         <span className="link-text hide">Показать одинаковые <i className="fa fa-eye"></i></span>
                      </button>
                   </div>

                   <TableView compare={this.props.compare} />

                </div>
             </div>
          </div>
      )
   }
}