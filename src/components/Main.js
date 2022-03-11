import { ItemListContainer } from "./ItemListContainer"
// import { Counter } from "./Counter"
import { ItemDetailContainer } from "./ItemDetailContainer";

const Main = (props) => {

    return (<>
        <main>
            <img src="/resources/logo.png" alt="logo" className="header__img"></img>
            <ItemListContainer greeting={`Bienvenida ${props.nombre} ${props.apellido}!`} />
            <ItemDetailContainer />
        </main>

    </>
    );
}

export default Main