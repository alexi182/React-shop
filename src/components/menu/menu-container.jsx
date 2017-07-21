export default class MenuContainer extends React.Component{
   render() {
      return (
         <div className={`${this.props.classList} ${this.props.isVertical ? 'is-vertical' : ''}`}>
            {React.Children.map(this.props.children, (c) =>
                React.cloneElement(c, {
                   menuType: c.props.menuType ? c.props.menuType : this.props.menuType
                })
            )}
         </div>
      )
   }
}

MenuContainer.propTypes = {
   isVertical: PropTypes.bool,
   classList: PropTypes.string.isRequired
};

MenuContainer.defaultProps = {
   classList: '',
   isVertical: false
};