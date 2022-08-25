import React, { createContext, useState, useContext } from 'react'
import { faker } from '@faker-js/faker';


export const contState = createContext();
// faker.seed(123);
export default function Context({children}) {
    const [cart, setCart] = useState([])
    const products= [];
    function createRandomProduct(){
        return {
            id : faker.datatype.uuid(),
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            image: faker.image.food(1234, 2345, true)
        };
    }
    Array.from({ length: 20 }).forEach(() => {
        products.push(createRandomProduct());
    });

    const initState = 1;
  return (
    <contState.Provider value={{cart, setCart, products}}>{children}</contState.Provider>
  )
}
export const CartState = () => {
    return useContext(contState);
};
