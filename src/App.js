import Header from "../src/componentes/Navbar/header/Header"
import Hero from "./componentes/hero/Hero.jsx";
import ItemCount from './componentes/ItermCount/ItemCount';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
  <Header/>
  <Hero/>
  <ItemListContainer/>
  <ItemCount stock={10} inicial={1}/>
  </>
  )
}

export default App;