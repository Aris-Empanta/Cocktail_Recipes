import axios from "axios"
import { useState } from "react"

export const ByIngredient = () => {
    
    const [cocktailName, setCocktailName] = useState([])
    const [error, setError] = useState("")
    


    const findIngredient = () => {

      setCocktailName([])
      setError("")

      let ingredient = document.getElementById("inputIngredient").value    
     

     axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient)
           .then((response) => {                     
              for(let i=0; i< response.data.drinks.length; i++){        
                  setCocktailName(oldArray => [...oldArray, response.data.drinks[i].strDrink])                                      
                }                                   
           }).catch(() => setError("no such cocktail"))   
    }
   
//
    return(<div>
             <input type="text" id="inputIngredient" placeholder="Enter ingredient" />
             <button id="searchIngredient" onClick={ findIngredient }>Search</button>
             { cocktailName.map(item => <p>{ item}</p>)}
             <p>{ error }</p>
           </div>
          )
}