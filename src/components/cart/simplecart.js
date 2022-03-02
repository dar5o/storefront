import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart';
import { Button } from '@material-ui/core';

const SimpleCart = props => {

  if (props.cart.cart.length > 0) {
    return (
      <>
        {props.cart.cart.map((product, item) => {
          return (
                <>
                <h3 key={item}>
                  {product.name}
                </h3>
                <Button variant="contained" color="secondary" onClick={() => props.removeFromCart(product)}>Remove from cart</Button>
                </>
              )
            })}
      </>
    )
  } else {
    return null
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = dispatch => ({
  removeFromCart: product => dispatch(removeFromCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);