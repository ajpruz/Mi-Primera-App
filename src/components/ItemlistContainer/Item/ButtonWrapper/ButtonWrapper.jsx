import React, { useState } from 'react'
import "./ButtonWrapper.css"


const ButtonWrapper = ({stock, addToCardWidget}) => {

    const [cantidad, setCantidad] = useState(1)

    function add() {
        if (cantidad < stock) setCantidad(cantidad+1)
    }


    function remove(){
        if (cantidad > 1) setCantidad(cantidad - 1)
    }
    
    return (
        <div>
            <div className='button-wrapper'>
                <button onClick={()=>remove()}>-</button>
                <span className={stock > 0 ? "positive" : stock < 0 ? "negative" : null}>{cantidad}</span>
                <button onClick={()=>add()}>+</button>
            </div>
            <div id='addCart'>
                <button className='addCart' onClick={()=>addToCardWidget(cantidad)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ButtonWrapper