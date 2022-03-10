import { ItemListContainer } from "./ItemListContainer"
import { Counter } from "./Counter"

const Main = (props) => {

    return (<>
        <main>
            <img src="/resources/logo.png" alt="logo" className="header__img"></img>
            <ItemListContainer greeting={`Bienvenida ${props.nombre} ${props.apellido}!`} />
            <Counter />
        </main>

    </>
    );
}

export default Main