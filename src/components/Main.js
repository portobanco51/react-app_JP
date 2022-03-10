// import { ItemListContainer } from "./ItemListContainer"
import { Contador } from "./Contador"
import { useState, useEffect } from "react";

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

const Main = (props) => {

    const [loading, setloading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setItems(initialItems)
            setloading(false)
        }, 2000)
    });
    console.log(items)

    return (<>
        <main>
            <img src="/resources/logo.png" alt="logo" className="header__img"></img>
            <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
            <p>La cantidad de items es: 0</p>
            <p>Cargando...</p>
            <ul>
                <li>Vacío</li>
            </ul>

        </main>

        {/* <ItemListContainer /> */}
        <Contador />
    </>
    );
}

export default Main