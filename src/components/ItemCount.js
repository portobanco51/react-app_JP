import { useState } from "react";

export function ItemCount(props) {

    const [counter, setCounter] = useState(props.initial);

    function Increase() {
        if (counter >= props.stock) {
            return
        } else {
            setCounter(counter + 1);
        }
    }

    function Decrease() {
        if (counter === props.initial) {
            return
        } else {
            setCounter(counter - 1);
        }
    }

    function Reset() {
        if (counter !== props.initial) {
            setCounter(props.initial)
        } else {
            return
        }
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