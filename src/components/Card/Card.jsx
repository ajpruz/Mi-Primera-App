import React, {useState, useEffect} from 'react'
import stock from "../Stocks/Stock";
import ButtonWrapper from "../Card/ButtonWrapper/ButtonWrapper";
import "./Card.css"
import Spinner from "../Card/SpinnerCard/Spinner";

const Card = ({addToCardWidget}) => {

    const [items,setItems] = useState([]);
    const [estado, setEstado] = useState(true)


    useEffect(() => { 

        function promise() {
            return new Promise((resolve, reject) =>{
                resolve(stock);
            })
        }

        promise().then(response =>{
            setItems(response)
        })
        setTimeout(() => {
            setEstado(false)
        }, 3000);
    }, [])

    return (
        <div className='card'>
            {estado
            ?
            <Spinner />
            :
            items.map((item, index) => {
                return (
                    <div className="card__body" key={index} >
                        <img className='card__image' src={item.img} alt="" />
                        <h2 className='card__title'>{item.name}</h2>
                        <p className="card__price">{item.price}</p>
                        <span>Stock = {item.stock}</span>
                        
                        <ButtonWrapper addToCardWidget={addToCardWidget} stock={item.stock} />
                    </div>
    
                  )
              })
            }
        </div>
    )
}

export default Card
