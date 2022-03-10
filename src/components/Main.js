import { ItemListContainer } from "./ItemListContainer"
import { Counter } from "./Counter"

const Main = (props) => {

    return (<>
        <main>
            <img src="/resources/logo.png" alt="logo" className="header__img"></img>
            <p>La cantidad de items es: 0</p>

        </main>

        <ItemListContainer greeting={`Bienvenida ${props.nombre} ${props.apellido}!`} />
        <Counter />
    </>
    );
}

export default Main