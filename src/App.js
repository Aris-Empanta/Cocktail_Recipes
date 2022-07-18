import './App.css';
import {Route, Link, Routes, useParams} from 'react-router-dom';
import AllCoctails from './components/allCoctails';
import Home from './components/home';
import DynamicCocktail from './components/dynamicCoctail';

function App() {


  return (
    <div className="App">      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/all-cocktails" element={ <AllCoctails/> } />
        <Route path="/:cocktailId" element={<DynamicCocktail />} />
      </Routes>
    </div>
  );
}

export default App;
