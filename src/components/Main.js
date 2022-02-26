import { ItemListContainer } from "./ItemListContainer"

const Main = (props) => {
    return (<>
        <main>
            <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
        </main>
        <ItemListContainer />
    </>
    )
}

export default Main