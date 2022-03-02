import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../store/categories.js';
import { getProducts } from '../../store/products.js';
import { addToCart } from '../../store/cart.js';
import { Typography, Button, Grid } from '@material-ui/core';

const viewProducts = props => {
  return (
  <>    
  {props.products.allProducts.map((product, index) => {
            if (product.category === props.activeCategory) {
              return (
                <Grid item key={index}>
                    <p>{product.name}</p>
                      <Typography>${product.price}</Typography>
                      <Button size = "small" variant="contained" color="success" onClick={() => props.addToCart(product)}> Add to Cart </Button>
                </Grid>
              )
            } else {
              return null;
            }
          })}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products, 
    activeCategory: state.categories.activeCategory, 
    activeDescription: state.description
  }
}

const mapDispatchToProps = {
  selectCategory,
  getProducts,
  addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(viewProducts);