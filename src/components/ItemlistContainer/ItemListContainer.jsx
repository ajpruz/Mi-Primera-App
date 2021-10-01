import React from 'react'
import  "./ItemListContainer.css";
import Card from "../Card/Card";


const ItemListContainer = ({saludo, items, setItems}) => {

    
    return (
        <div className='container'>
            <h2>{saludo}</h2>
            <div>        
                <section className=''>
                    <Card 
                    setItems={setItems} 
                    items={items}
                     />
                </section>
            </div>
        </div>
    )
}

export default ItemListContainer
