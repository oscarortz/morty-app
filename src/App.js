import Navegacion from "./componentes/Navegacion";
import Titulo from "./componentes/Titulo";
import ListaPersonajes from "./componentes/ListaPersonajes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./componentes/NavBar";
import CharacterLocation from "./paginas/CharacterLocation";
import Episodios from "./paginas/Episodios";
import DetalleDelPersonaje from "./paginas/DetalleDelPersonaje";
import LocationDetail from "./paginas/LocationDetail";

function App() {
  return (
    <div className="App">
      <Navegacion />
      <Titulo />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ListaPersonajes />} />
          <Route path="/location" element={<CharacterLocation />} />
          <Route
            path="/detallePersonaje/:id"
            element={<DetalleDelPersonaje />}
          />
          <Route path="/locationDetail/:id" element={<LocationDetail />} />
          <Route path="episodios" element={<Episodios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
