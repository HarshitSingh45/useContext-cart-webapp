import React, { useContext, useEffect, useState } from 'react'
import { contState } from './Context'
import SingleProduct from './SingleProduct';

export default function Products() {
    const tempState = useContext(contState);
    const products = tempState.products;
    console.log('products are ', products)
    // useEffect(() => {
      
    // }, [tempState.cart])
    
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', 
                 justifyContent: 'center', padding: '5px'}}>
        {
            products.map((prod)=>{
                return <SingleProduct prod={prod} key={prod.id} cart={tempState.cart} setCart={tempState.setCart} />
            })
        }
    </div>
  )
}
