import { useState } from "react";

export function ItemCount(props) {

    const [counter, setCounter] = useState(props.initial);

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
        <button onClick={props.onAdd}>Agregar al Carrito</button>
    </>
    )
}