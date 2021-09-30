import React from 'react'
import {  } from "./ItemListContainer.css";

const ItemListContainer = ({saludo}) => {
    return (
        <div className='title'>        
            <h2>{saludo}</h2>
            <div className="line">
                <hr />
                <h3>CAMADA: 16960 - ALEXIS PORTILLO</h3>
                <hr />
                <p>
                Desafío: Menú e-commerce
                <br />
                Desafío: Crea tu landing
                </p>
            </div>
        </div>
    )
}

export default ItemListContainer
