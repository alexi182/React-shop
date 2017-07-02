import {Link} from 'react-router';

export default class MenuItem extends React.Component{
   render() {

      console.log(this.props.children);

      return (
          <li className={`${this.props.menuType}-menu-item menu-item level-${this.props.level}`}>
             <Link to={this.props.href} className={`${this.props.menuType}-menu-link menu-link level-${this.props.level}`}>{this.props.name}
             </Link>

             {this.props.children ? <button className={`${this.props.menuType}-menu-marker menu-marker menu-marker level-${this.props.level}`} type="button"> </button> : null}

             {this.props.children ? React.Children.map(this.props.children, (c) => React.cloneElement(c, {
                        menuType: c.props.menuType ? c.props.menuType : this.props.menuType
                     })
                 ) : null}
          </li>
      )
   }
}

MenuItem.propTypes = {
   menuType: PropTypes.string.isRequired,
   level: PropTypes.number.isRequired,
   href: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
   level: 1
};