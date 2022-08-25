import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div style={{height: '100px', backgroundColor: 'coral' ,
                 display: 'flex', alignItems: 'center', 
                 justifyContent: 'space-between', paddingLeft: '30px', 
                 paddingRight: '30px' }}>
         <div style={{fontSize: '3rem', fontWeight: 'bold', color: 'white'}}>
            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>Cartify</Link> 
         </div>
         <div style={{fontSize: '2rem', color: 'white'}}>
            <Link to='/cart' style={{textDecoration: 'none', color: 'white'}}>Cart</Link>
         </div>
    </div>
  )
}
