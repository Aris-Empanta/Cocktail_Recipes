import {useParams} from 'react-router-dom';
import Axios from "axios"
import { useEffect, useState } from 'react';

function DynamicCocktail() {
    
    const [recipe, setRecipe] = useState("")
    const params = useParams();
    const [cocks, setCocks] = useState("")
    const [loaded, setLoaded] = useState(false)

     
    useEffect(() => {

     
      let loader = document.getElementById("loaderRecipe")

      if(loaded === false){
          loader.style.display = "initial"
        } else {
          loader.style.display = "none"
        }
        Axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + params.cocktailId).then((response) => { 

                setLoaded(true) 

                for(let i=0; i< response.data.drinks.length; i++){
                    if(params.cocktailId === response.data.drinks[i].strDrink) {
                        setRecipe(response.data.drinks[i].strInstructions)
                        setCocks(response.data.drinks[i].strDrink)
                    }
                  }        
          })
        }
      )

  return (
    <div>      
      { recipe }<br></br>
      { cocks}
      <p id="loaderRecipe">...loading</p>
    </div>
  );
}

export default DynamicCocktail;
