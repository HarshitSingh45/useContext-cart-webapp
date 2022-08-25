import React, { useContext } from 'react'
import { contState } from './Context'

export default function Cart() {
    const crt = useContext(contState);
    const cartitems = crt.cart;
    console.log(cartitems)
    const total = cartitems.reduce((acc, curr) => acc+Number(curr.price),0)
    console.log(total);
  return (
    <div style={{marginTop: '50px' ,display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <ul>
            {cartitems.map((item) => {
                return (
                    <li>{item.name} - {item.price}</li>
                )
            })}
        </ul>
        <h1>Total - {total}</h1>
    </div>
  )
}
