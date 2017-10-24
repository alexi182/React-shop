import { Link } from 'react-router';

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="row flex-between flex-middle">
					<div className="logotype header-block cell-6 cell-12-sm _flex-first-sm flex-center-md">

						<Link to={"/"} className="logotype-link" title="Тема Нейрон">
							<span className="logotype-text">Тема Нейрон</span>
						</Link>

					</div>
					<div className="cell-3 cell-12-sm">
						<div className="phone header-block flex-center-sm">
							<a href="tel:+7 495 123-45-67" className="contact-link"><i className="icon fa fa-phone"></i> +7 495 123-45-67</a>
						</div>
						<div className="email header-block flex-center-xs hidden-sm">
							<a href="mailto:sales@myshop.ru" className="contact-link"><i className="icon fa fa-envelope"></i>sales@myshop.ru</a>
						</div>
					</div>
					<div className="cell-3 header-block flex-end hidden-sm">
						<form className="search-widget " action="#">
							<input type="text" className="search-widget-field" placeholder="Поиск" />
							<button type="submit" className="search-widget-button button fa fa-search"> </button>
						</form>
					</div>
				</div>
			</header>
		);
	}
}


