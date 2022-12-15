import Navegacion from "./componentes/Navegacion";
import Titulo from "./componentes/Titulo";
import ListaPersonajes from "./componentes/ListaPersonajes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navegacion />
      <Titulo />

      <ListaPersonajes />
    </div>
  );
}

export default App;
