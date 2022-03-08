import { useState } from "react";

export function ItemCount(props) {

    const [counter, setCounter] = useState(props.initial);

    const onAdd = () => {
        console.log(`${counter} items agregados al Carrito`)
    }

    function Increase() {
        setCounter(counter + 1);
    }

    function Decrease() {
        setCounter(counter - 1);
    }

    function Reset() {
        setCounter(props.initial);
    }

    return (<>
        <p>Cantidad de items a comprar: {counter} </p>
        <button onClick={Decrease} disabled={counter === props.initial}>-</button>
        <button onClick={Reset}>Resetear Cantidad</button>
        <button onClick={Increase} disabled={counter === props.stock}>+</button><br></br>
        <button onClick={onAdd} disabled={counter === 0}>Agregar al Carrito</button>
    </>
    )

}