import React from 'react'
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";

const item = {
    title: "Laptop HP",
    descripcion: "Remera Tupac Shakur unisex",
    url: "https://picsum.photos/id/0/600",
    precio: 3200,
    categoria: "vestir",
    stock: 10
}

const itemPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res(item)
    }, 3000);
})

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const getItem = () => {
        return itemPromise
    }

    useEffect(() => {
        getItem()
            .then((data) => setItem(data))
            .catch((err) => console.log(err))
    })

    return (
        <div className='itemDetailContainer'>
            <ItemDetail item={item} />
        </div>
    )
}