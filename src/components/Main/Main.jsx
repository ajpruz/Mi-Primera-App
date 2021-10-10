import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from '../ItemlistContainer/ItemListContainer'
import Navbar from '../Navbar/Navbar'

const Main = ({children}) => {
    const [favoritos, setFavoritos] = useState([])
    const [carrito, setCarrito] = useState(0);

    const addToCardWidget = (articles) => {
        setCarrito(carrito + articles)
    }

    return (
        <BrowserRouter>
            <Navbar carrito={carrito}/>
            <Switch>
            {children}
            <Route exact path="/favoritos">
            <ItemListContainer favoritos={favoritos} setFavoritos={setFavoritos} addToCardWidget={addToCardWidget}/>
            </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Main
