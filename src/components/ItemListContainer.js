import React from 'react'
import { ItemCount } from './ItemCount'

export const ItemListContainer = () => {
    return (<>
        <div>
            <h2>Productos</h2>
            <ul>
                <li>Bolso</li>
                <li>Cartera</li>
                <li>Lentes</li>
                <li>Collar</li>
            </ul>

            <ItemCount stock={5} initial={1} />
        </div>
    </>
    )
}