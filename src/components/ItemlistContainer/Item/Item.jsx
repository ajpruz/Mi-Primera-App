import React from 'react'
import ButtonWrapper from "./ButtonWrapper/ButtonWrapper";
import "./Item.css"

const Item = ({item, addToCardWidget}) => {

    const { img, name, price, stock } = item

    return (
        <div className='card'>
             <div className="card__body" >
                <img className='card__image' src={img} alt="" />
                <h2 className='card__title'>{name}</h2>
                <p className="card__price">{price}</p>
                <span>Stock = {stock}</span>   
                <ButtonWrapper addToCardWidget={addToCardWidget} stock={stock} />
            </div> 
        </div>
    )
}

export default Item
