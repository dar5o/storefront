import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { selectCategory } from '../../store/categories.js';

const viewCategories = (props) => {
  return (
    <>
      <Typography variant="h4" component='h4'> Browse By Category </Typography>
      <Button variant="contained" color="primary" onClick={() => props.selectCategory('Clothing')}>Clothes</Button>
      <Button variant="contained" color="primary" onClick={() => props.selectCategory('Books')}>Books</Button>
      <Typography>{props.activeDescription}</Typography>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    activeCategory: state.categories.activeCategory,
    activeDescription: state.categories.activeDescription
  }
}

const mapDispatchToProps = {
  selectCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(viewCategories);