import { useState } from "react";

export function ItemCount(props) {


    const [counter, setCounter] = useState(props.initial);

    const onAdd = () => {
        if (counter === props.stock) {
            console.log(`${counter} items agregados al carrito`);
        } else if (counter >= props.stock) {
            return
        } else {
            console.log(`${counter} items agregados al carrito`);
            setCounter(counter + 1);
        }
    }

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
        <p>Cantidad de items a comprar: </p>
        <div className="buttons">
            <button onClick={Decrease} disabled={counter === props.initial}>-</button>
            <b className="amount">{counter}</b>
            <button onClick={Increase} disabled={counter === props.stock}>+</button><br></br>
        </div>
        <button className="add-btn" onClick={onAdd} disabled={counter === props.stock}>Agregar al Carrito</button>
        <button className="rst-btn" onClick={Reset} hidden={counter === props.initial}>Resetear</button>
    </>
    )
}