export default class Payment extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
          <div className="page-inner-content">
             <div className="decorated-title-wrapper">
                <div className="decorated-title">
                   <div className="page-header-wrapper">
                      <h1 className="page-header">Оплата</h1>
                   </div>
                </div>
             </div>

             <div className="page-content page-/page/payment">
                <div className="editor">
                   <h2>Как оплатить заказ?</h2>

                   <div className="payment-block">
                      <p>1.&nbsp;Оплатить заказ можно наличными или банковской картой при получении. Вы также можете оплатить покупки банковской картой при оформлении заказа;</p>
                      <p>2.&nbsp;Доступные способы оплаты заказов: наличные,банковские карты,PayPal,карты Lamoda от Тинькофф;</p>
                      <p>3.&nbsp;Вы сможете проверить соответствие комплектации заказа и подлинность вещей в присутствии курьера.</p>
                   </div>

                   <h3 className="help-center__article-title">Наложенный платеж (Почта России)</h3>

                   <div className="payment-block">
                      <p>Почта&nbsp;России взимает комиссию за наложенный платеж (оплата посылки при получении). Сумма комиссии зависит от&nbsp;стоимости заказа и составляет от 2% (но не менее 50 рублей). Если заказ был оплачен на сайте,то при получении посылки на почте оплачивать ничего не нужно.</p>
                   </div>

                   <h3 className="help-center__article-title">Восстановление возможности оплаты при получении</h3>
                   <h4 className="help-center-banner">Ограничение возможности оплаты заказа при получении вступает в силу автоматически и может возникнуть в следующих&nbsp;случаях:</h4>

                   <div className="payment-block">
                      <ol>
                         <li>Большое количество заказов,созданное за короткий временной промежуток;</li>
                         <li>Большой процент отказов по заказам,оформленным в последнее время.</li>
                      </ol>
                      <p>Возможность&nbsp;оплаты заказа при получении восстанавливается только после выкупа из предоплаченных заказов товаров&nbsp;на общую сумму&nbsp;7000 рублей в течение трех месяцев.</p>
                   </div>

                   <div className="help-center-glossary"></div>
                </div>
             </div>
          </div>
      )}
}