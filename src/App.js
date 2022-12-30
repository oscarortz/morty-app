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
import { PublicPage } from "./paginas/PublicPage";
import { PrivatePages } from "./componentes/PrivatePages";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navegacion />
        <Titulo />
        <BrowserRouter>
          <NavBar />
          <Auth />
          <Routes>
            <Route path="/" element={<ListaPersonajes />} />
            <Route path="/login" element={<PublicPage />} />
            <Route element={<PrivatePages />}>
              <Route path="/location" element={<CharacterLocation />} />
              <Route path="episodios" element={<Episodios />} />
              <Route
                path="/detallePersonaje/:id"
                element={<DetalleDelPersonaje />}
              />
              <Route path="/locationDetail/:id" element={<LocationDetail />} />

              <Route
                element={<EpisodiosDelPersonaje />}
                path="/episodiosDelPersonaje/:id"
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
