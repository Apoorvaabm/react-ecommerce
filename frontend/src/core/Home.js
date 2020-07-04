import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function Home(props) {

  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category))
  }
 

  return <>
    {category &&
      <h2>{category}</h2>}

    <ul className="filter">
      <li>
        <form onSubmit={submitHandler}>
          
        </form>
      </li>

       
    </ul>
    {loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
        <ul className="products">
          {products &&
            products.map(product =>
              <li key={product._id}>
                <div className="product">
                  <Link to={'/product/' + product._id}>
                    <img className="product-image" src={product.image} alt="product" />

                  </Link>
                  
                  <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
      
                  <div className="product-category">{product.category}</div>
                  <div className="product-price">Rs.{product.price}</div>
                  <div className="product-countInStock">{product.countInStock}</div>
                </div>
            
            
                </div>
              </li>)
          }
        </ul>
    }
  </>

}
export default Home;