import React from 'react'
import { NavLink } from 'react-router-dom'
import { ItemCount } from './ItemCount'

const onAdd = () => {
    console.log("Agregado al carrito")
}

export const Item = ({ item }) => {
    return (<>

        <li className='item'>
            <div className='item__list'>
                <NavLink to={`/item/${item.id}`}>{item.title}</NavLink>
                <img className='header__img' src={item.thumbnailUrl} alt={item.id}></img>
                <h5>Category: {item.cat}</h5>
                <h4>Price: ${item.precio} </h4>
                <ItemCount initial={1} stock={8} onAdd={onAdd} />
            </div>
        </li >
    </>
    );
};
