import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";

export const context = createContext([{ id: 1, titulo: "poster costal" }, { id: 2, titulo: "poster casa" }])
// console.log(context)
const { Provider } = context

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Main
                nombre="Valeria"
                apellido="Morales" />
            <Footer />
        </ BrowserRouter>)
};

export default App;