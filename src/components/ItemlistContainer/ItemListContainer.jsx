import React from 'react'
import  "./ItemListContainer.css";
import Card from "../Card/Card";


const ItemListContainer = ({addToCardWidget}) => {


    
    return (
        <div className='container'>
            <h2>{}</h2>
            <div>        
                <section>
                    <Card addToCardWidget={addToCardWidget} />
                </section>
            </div>
        </div>
    )
}

export default ItemListContainer
