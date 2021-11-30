import Header from "./Components/Header/Header";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  const bienvenida = 'Bienvenido a Tienda Frisbix';

  return (
    <>
      <Header/>
      <ItemListContainer greeting={bienvenida}/>
      <ItemCount stock={5} initial={1}/>
    </>
  );
}

export default App;
