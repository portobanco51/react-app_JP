import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
// import { ItemDetail } from "./ItemDetail";

// const item = [{ title: "Poster Laptop", stock: 12, precio: 500, id: 1, cat: 'Casual', thumbnailUrl: "https://picsum.photos/id/0/600" }];

// const itemsPromise = new Promise((res, rej) => {
//     res(item)
// })


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        const itemFetch = async () => {
            try {
                const res = await fetch('./items.json')
                const items = await res.json()
                console.log(items)
                setItem(items)

            }
            catch {
                console.log('err')
            };
        }

        itemFetch()

        return (
            <div className='itemDetailContainer'>
                <h2> {item.title} </h2>
            </div >
        )
    }, [id])
}