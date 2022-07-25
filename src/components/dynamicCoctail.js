import {useParams} from 'react-router-dom';
import Axios from "axios"
import { useEffect, useState } from 'react';

function DynamicCocktail() {    
    
    const [recipe, setRecipe] = useState("")    
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [alcoholic, setAlcoholic] = useState("")
    const [glass, setGlass] = useState("")
    const [image, setImage ] = useState("")
    const [axiosReference, setAxiosReference] = useState(0)
    const [ingredients, setIngredients] = useState([])
    const [loaded, setLoaded] = useState(false)

    const params = useParams();

     
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
                        setName(response.data.drinks[i].strDrink)
                        setAlcoholic(response.data.drinks[i].strAlcoholic)
                        setCategory(response.data.drinks[i].strCategory)
                        setGlass(response.data.drinks[i].strGlass)
                        setImage(response.data.drinks[i].strDrinkThumb)

                        
                        
                        let j = 1
                        while(response.data.drinks[i]["strIngredient"+j]){
                         
                          setIngredients((oldArray) => [...oldArray, response.data.drinks[i]["strIngredient"+j]])
                          j += 1  
                          if(response.data.drinks[i]["strIngredient"+j] === null){
                            
                            break
                              
                          }
                        }
                        
                      }

                        console.log(ingredients.length)
                    }
                       
              })

            
        }
      )

  return (
    <div>    
      <img src= { image } /><br></br>  
      { name }<br></br>
      { recipe }<br></br>
      { alcoholic }<br></br>
      { glass }<br></br>
      { category }<br></br>
      <p id="loaderRecipe">...loading</p>
    </div>
  );
}

export default DynamicCocktail;
