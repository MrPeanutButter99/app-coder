import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  const bienvenida = 'Bienvenido a Tienda Frisbix';

  return (
    <>
      <Header/>
      <ItemListContainer greeting={bienvenida}/>
    </>
  );
}

export default App;
