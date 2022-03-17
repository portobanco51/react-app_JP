import { ItemListContainer } from "./ItemListContainer"
// import { Counter } from "./Counter"
import { ItemDetailContainer } from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import { Carrito } from "./Carrito";

const Main = (props) => {

    return (<>
        <main>
            {/* <img src="/resources/logo.png" alt="logo" className="header__img"></img>
            <ItemListContainer greeting={`Bienvenida ${props.nombre} ${props.apellido}!`} />
            <ItemDetailContainer /> */}

            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:id" element={<ItemListContainer />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </main>

    </>
    );
}

export default Main