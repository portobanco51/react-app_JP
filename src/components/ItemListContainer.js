import { useState, useEffect } from "react";
// import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";

// const onAdd = () => {
//     console.log("Agregado al carrito")
// }

// let initialItems = [
//     // {
//     //     id: 1,
//     //     nombre: "Producto 1",
//     //     precio: 100
//     // },
//     // {
//     //     id: 2,
//     //     nombre: "Producto 2",
//     //     precio: 200
//     // },
//     // {
//     //     id: 3,
//     //     nombre: "Producto 3",
//     //     precio: 300
//     // }
// ];

// const itemPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(initialItems)
//     }, 2000)
// })


export const ItemListContainer = ({ greeting }) => {

    const [list, setList] = useState([]);

    useEffect(() => {

        const itemFetch = async () => {
            try {
                const res = await fetch('./items.json')
                const items = await res.json()
                setList(items)
            }
            catch {
                console.log('err')
            };
        }

        itemFetch()
    }, []);

    return (
        <>
            <div className="itemListContainer">
                <h2>{greeting}</h2>
                <hr></hr>
                <ItemList items={list} />
                {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
            </div>
        </>
    )
}