import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { inactive, active } from '../../store/categories.js';

const viewCategories = (props) => {
  return (
    <>
      <Typography variant="h4" component='h4'> Browse By Category </Typography>
      <Button variant="contained" color="primary" onClick={() => props.active('Clothing')}>Clothes</Button>
      <Button variant="contained" color="primary" onClick={() => props.active('Books')}>Books</Button>
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
  inactive,
  active,
}

export default connect(mapStateToProps, mapDispatchToProps)(viewCategories);