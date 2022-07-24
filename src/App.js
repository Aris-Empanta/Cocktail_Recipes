import './App.css';
import {Route,  Routes} from 'react-router-dom';
import AllCoctails from './components/allCoctails';
import Home from './components/home';
import DynamicCocktail from './components/dynamicCoctail';
import { ByName } from './components/byName';
import { ByIngredient } from "./components/byIngredient"

function App() {


  return (
    <div className="App">       
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/all-cocktails" element={ <AllCoctails/> } />
        <Route path="/by-ingredient" element={ <ByIngredient/> } />
        <Route path="/by-name" element={ <ByName/> } />
        <Route path="/:cocktailId" element={<DynamicCocktail />} />
      </Routes>
    </div>
  );
}

export default App;
