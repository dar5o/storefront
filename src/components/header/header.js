import { connect } from 'react-redux';

const Header = props => {

  return (
    <>
    <h1>Storefront</h1>
    <p>Cart: {props.cart.cart.length}</p>
    </>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Header);