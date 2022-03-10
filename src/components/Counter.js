import { useState } from "react";

export const Counter = () => {

    const [dark, setDark] = useState(false)

    const toggleDarkMode = () => {
        setDark(!dark)
    }

    return (
        <div>
            <h1>Contador</h1>
            <p>El tema del sitio es: {dark.toString()}</p>
            <p>Mi contador actual: 0</p>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>

        </div>
    )
}

