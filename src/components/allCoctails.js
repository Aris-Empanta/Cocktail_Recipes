import Axios from "axios"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function AllCoctails() {

  const [cocktail, setCocktail] = useState([])
  const [cocktailIndex, setCocktailIndex ] = useState([])


  useEffect(() => {
    Axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then((response) => {
        for(let i=0; i< response.data.drinks.length; i++){
          setCocktail(oldArray => [...oldArray, response.data.drinks[i].strDrink])
        }
      })
    }
  )

  return (
    <div className="App">
      {cocktail.map(item => <a href={ item } target="_blank" ><h1>{ item }</h1></a>)}
    </div>
  );
}

export default AllCoctails;