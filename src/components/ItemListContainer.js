import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
// import { ItemList } from "./ItemList";

const onAdd = () => {
    console.log("Agregado al carrito")
}

let initialItems = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300
    }
]

const itemPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res(initialItems)
    }, 2000)
})

export const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        itemPromise
            .then((res) => {
                setItems(initialItems)

            })
            .catch((err) => {
                console.log(err)
            })
    });

    console.log(items)

    return (
        <>
            <div className="itemListContainer">
                <h2>{greeting}</h2>
                <hr></hr>
                {/* <ItemList items={items} /> */}
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
        </>
    )
}