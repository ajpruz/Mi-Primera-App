import React, { useState } from 'react'
import ItemListContainer from '../ItemlistContainer/ItemListContainer'
import Navbar from '../Navbar/Navbar'

const Main = ({children}) => {

    const [carrito, setCarrito] = useState(0);

    const addToCardWidget = (articles) => {
        setCarrito(carrito + articles)
    }

    return (
        <>
            <Navbar carrito={carrito}/>
            {children}
            <ItemListContainer addToCardWidget={addToCardWidget}/>

        </>
    )
}

export default Main
