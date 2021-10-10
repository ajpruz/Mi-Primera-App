import React, {useState, useEffect} from 'react'
import  "./ItemListContainer.css";
import stock from "../Stocks/Stock";
import Spinner from "../ItemlistContainer/Item/SpinnerCard/Spinner";
//import axios from 'axios';
import Item from './Item/Item';


const ItemListContainer = ({addToCardWidget}) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    const getItems = async () => {   
        try {
            const resp = stock /* await axios.get('https://api.jikan.moe/v3/anime') */
            setItems(resp)
        } catch (error) {
            console.log(error)            
        }
    }

    useEffect(() => {
        getItems()
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])
    
    return (
        <div className='container'>  
            {
                loading
                ?
                <Spinner/>
                :
                items.map((item) => (
                    <Item key={item.id} addToCardWidget={addToCardWidget} item={item}/>
                ))
            }
        </div>
    )
}

export default ItemListContainer
