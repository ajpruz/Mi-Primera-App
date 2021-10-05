import React, {useState, useEffect} from 'react'
import stock from "../Stocks/Stock";
import ButtonWrapper from "../Card/ButtonWrapper/ButtonWrapper";
import "./Card.css"

const Card = ({addToCardWidget}) => {

    function comprobarError(){
        return (Math.random() < 0.5);
      }


    function promise() {
        return new Promise((resolve, reject) =>{
            setTimeout(
                function(){
                    const error = comprobarError();
                    if(!(error)){
                        resolve(stock);

                    }
                    else {
                        reject(new Error("Error obteniendo los datos"))
                    }
            }, 
            3000);
        });
    }

    const [items,setItems] = useState(null);
    const [estado, setEstado] = useState('cargando...')

    useEffect(() => {
        let requestDatos = promise();

        requestDatos.then( function(items_promise){
            setItems(items_promise);
            setEstado('Listo');
            console.log(items_promise);
        })
        .catch( function(err){
            console.log(err);
            setEstado('Error');
        }).finally(()=>{
            console.log('Promesa TErminada')
        })
    }, [])

    return (
        <div className='card'>
            {estado}
            {(items !== null) &&
            items.map((item, index) => {
            return (
                <div className="card__body" >
                    <img className='card__image' src={item.img} alt="" />
                    <h2 className='card__title'>{item.name}</h2>
                    <p className="card__price">{item.price}</p>
                    <span>Stock = {item.stock}</span>
                    
                    <ButtonWrapper addToCardWidget={addToCardWidget} stock={item.stock} />
                </div>

              )
          })}
        </div>
    )
}

export default Card
