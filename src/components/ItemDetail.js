import React from 'react'
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ item }) => {
    return (<>
        <div className='itemList'>
            <div className='item__list'>
                <h3>Item: {item.title} </h3>
                <p>Precio: {item.precio} </p>
                <img className='card-icon' src={item.url} alt={item.id} ></img>
                <ItemCount initial={1} stock={item.stock} />
                <hr></hr>
            </div>
        </div >
    </>

    )
}
