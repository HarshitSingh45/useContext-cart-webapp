import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { contState } from './Context';

export default function SingleProduct({prod, cart, setCart}) {
    // const std = useDispatch(contState);
    // console.log(std)
    // const cart = st.cart;
    // const setCart = st.setCart;
    // console.log(prod);

    
    // console.log('cart', cart)
    // function addToCart(){
    //     setCart([...cart, prod]);
    //     console.log('Cart', cart)
    // }
    console.log('cart', cart)
    const [isPresent, setIsPresent] = useState(false);
    
  return (
    <div style={{display: 'flex', flexDirection: 'column',
                    width: '250px', height: '250px', 
                    padding: '10px', margin: '20px', border: '2px solid black'}}>
        <div style={{overflow: 'hidden'}}>
            <img src={prod.image} alt='m'  />
        </div>
        <br />
        <div>
            {prod.name}
        </div>
        <div>
            Rs. {prod.price}
        </div>
        <div>
            {/* {cart.includes(prod) ? console.log('if true', cart) : console.log('is false', cart) } */}
            {
                !isPresent &&
                <button style={{padding: '5px'}} onClick= {(e) => {e.preventDefault(); setCart([...cart,prod]); setIsPresent(true)}}> Add to cart </button>}
            
            {isPresent && <button style={{padding: '5px'}} onClick= {()=>{setCart(cart.filter((c)=> c.id!==prod.id))}}>
                Remove from cart
            </button>}
            
        </div>
    </div>
  )
}
