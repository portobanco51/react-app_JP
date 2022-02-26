import Header from './Header';
import Main from './Main';
import Footer from './Footer';
function App() {
    return (<>
        <Header />
        <Main
            nombre="Canalla"
            apellido="González" />
        <Footer />
    </>)
};

export default App;