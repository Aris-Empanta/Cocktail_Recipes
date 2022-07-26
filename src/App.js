import {Route,  Routes} from 'react-router-dom';
import { AllCoctails } from './components/allCoctails';
import { Home } from './components/home';
import { DynamicCocktail } from './components/dynamicCoctail';
import { Random } from './components/random';
import { ByName } from './components/byName';
import { ByIngredient } from "./components/byIngredient"
import './App.css';


export const App = () => {

  return (      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/all-cocktails" element={ <AllCoctails/> } />
        <Route path="/by-ingredient" element={ <ByIngredient/> } />
        <Route path="/by-name" element={ <ByName/> } />
        <Route path="/random" element={ <Random/> } />
        <Route path="/:cocktailName" element={<DynamicCocktail />} />
      </Routes>
   );
}