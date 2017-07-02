export default class Menu extends React.Component{
   render() {
      return (
          <ul className= {`${this.props.menuType}-menu menu level-${this.props.level}`}>
             {React.Children.map(this.props.children, (c) => React.cloneElement(c, {
                    level: this.props.level,
                    menuType: c.props.menuType ? c.props.menuType : this.props.menuType
                 })
             )}
          </ul>
      )
   }
}

Menu.propTypes = {
   level: PropTypes.number.isRequired
};

Menu.defaultProps = {
   level: 1
};