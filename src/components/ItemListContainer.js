import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";

// const onAdd = () => {
//     console.log("Agregado al carrito")
// }


export const ItemListContainer = ({ greeting }) => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {

        const itemFetch = async () => {
            try {
                const res = await fetch('./items.json')
                const items = await res.json()
                setList(items)
            }
            catch {
                console.log('err')
            }
            finally {
                setLoading(false)
            }
        };

        setTimeout(() => {
            itemFetch();
        }, 1000)

    }, [id])

    return (
        <>
            <div className="itemListContainer">
                {/* <h2>{greeting}</h2>
                <hr></hr> */}
                <p>{loading ? "Cargando ..." : null}</p>
                <ItemList items={list} />
                {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
            </div>
        </>
    )
}