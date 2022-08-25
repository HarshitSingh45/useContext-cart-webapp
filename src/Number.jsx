import React, {useContext} from 'react'
import { GlobalContext } from './App'
import { contState } from './Context';

// export default function Number() {
//   return (
//     <GlobalContext.Consumer>
//         {(st)=>{
//             return <div>{st?.fname}</div>
//         }}
//     </GlobalContext.Consumer>
//   )
// }
// 
export default function Number() {
    const st = useContext(GlobalContext);
    const secondState = useContext(contState);
    console.log('first state ', st);
    console.log('Second state ', secondState);
  return (
    <div>{st.fname}</div>
  )
}
