import "./App.css";
import LocationsPage from "./pages/LocationsPage/LocationsPage";
import PokedexPage from "./pages/PokedexPage/PokedexPage";
import { Route, Routes } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage/PokemonPage";
import HomePages from "./pages/HomePages/HomePages";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route element={<ProtectedRoutes/>}/>
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/pokedex/:id" element={<PokemonPage />} />
          <Route path="/locations" element = {<LocationsPage/>}/>

      </Routes>
    </>
  );
}

export default App;
