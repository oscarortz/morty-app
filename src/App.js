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
import EpisodiosDelPersonaje from "./paginas/EpisodiosDelPersonaje";
import Auth from "./paginas/Auth";
import { AuthProvider } from "./contexto/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navegacion />
        <Titulo />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/ListaDePersonajes" element={<ListaPersonajes />} />
            <Route path="/location" element={<CharacterLocation />} />
            <Route
              path="/detallePersonaje/:id"
              element={<DetalleDelPersonaje />}
            />
            <Route path="/locationDetail/:id" element={<LocationDetail />} />
            <Route path="episodios" element={<Episodios />} />
            <Route
              path="/episodiosDelPersonaje/:id"
              element={<EpisodiosDelPersonaje />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
