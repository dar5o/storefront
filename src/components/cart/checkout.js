import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Button, Grid } from '@material-ui/core'

const ShoppingCart = props => {

  let { cart } = useSelector(cart => cart);
  
  return (
    <>
    <Button>Back</Button>
    <p>Product details</p>
    <Grid>
      {cart.map(product => {
        return (
          <>
          <p>{product.name}</p>
          <p>${product.price}</p>
          <p>{product.inventory} in stock</p>
          <p>category: {product.category}</p>
          </>
        )
      })}
    </Grid>
    </>
  )

}

const mapStateToProps = state => {
  return{
    cart: state.cart
  }
}

export default connect(mapStateToProps)(ShoppingCart);