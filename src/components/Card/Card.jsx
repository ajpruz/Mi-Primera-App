import React, {useEffect} from 'react'
import stock from "../Stocks/Stock";
import ButtonWrapper from "../Card/ButtonWrapper/ButtonWrapper";
import "./Card.css"

const Card = ({setItems, items}) => {


    useEffect(() => {
        console.log('Se Agrego un Carrito')}, [items])
    return (
        <div className='card'>
            {stock.map((item) => {
            return (
                <div className="card__body" >
                    <img className='card__image' src={item.img} alt="" />
                    <h2 className='card__title'>{item.name}</h2>
                    <p className="card__price">{item.price}</p>
                    <span>Stock = {item.stock}</span>
                    
                    <ButtonWrapper items={items} setItems={setItems}/>
                </div>

              )
          })}
        </div>
    )
}

export default Card
