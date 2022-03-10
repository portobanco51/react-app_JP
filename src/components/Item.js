import React from 'react'

export const Item = ({ item }) => {
    return (<>
        <div>
            <li className='item'>
                <div className='item_bottom'>
                    <h3>{item.nombre}</h3>
                    <p>Precio: $ {item.precio}</p>
                    <hr></hr>
                </div>
            </li >
        </div ></>

    )
}
