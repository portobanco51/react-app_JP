import React from 'react'
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ item }) => {
    return (
        <>
            <div className='itemList'>
                <div className='item__list'>
                    <h3>Item: {item[0].title} </h3>
                    <p>Precio: $ {item[0].precio} </p>
                    <img className='card-icon' src={item[0].thumbnailUrl} alt={item[0].id} ></img>
                    <ItemCount initial={1} stock={item[0].stock} />
                    <hr></hr>
                </div>
            </div >
        </>
    )
};
