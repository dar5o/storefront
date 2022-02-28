import React from 'react';
import { connect } from 'react-redux';

const SimpleCart = props => {

  if (props.cart.length > 0) {
    return (
      <>
       <p>Cart:</p>
            {props.cart.map((product, item) => {
              return (
                <h3 key={item}>
                  {product.name}
                </h3>
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

export default connect(mapStateToProps)(SimpleCart);