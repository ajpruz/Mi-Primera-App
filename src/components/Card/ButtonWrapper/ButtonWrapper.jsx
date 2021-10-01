import React from 'react'
import "./ButtonWrapper.css"


const ButtonWrapper = ({setItems, items}) => {

    
    return (

        <div className='button-wrapper'>
            <button onClick={()=>setItems(items-1)}>-</button>
            <span className={items > 0 ? "positive" : items < 0 ? "negative" : null}>{items}</span>
            <button onClick={()=>setItems(items+1)}>+</button>
        </div>
        
    )
}

export default ButtonWrapper