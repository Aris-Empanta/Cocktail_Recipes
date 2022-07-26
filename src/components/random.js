import { NavBar } from './navBar';
import { useEffect, useState } from 'react';
import axios from "axios"
import "../css/random.css"

export const Random = () => {

    const [recipe, setRecipe] = useState("")    
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [alcoholic, setAlcoholic] = useState("")
    const [glass, setGlass] = useState("")
    const [image, setImage ] = useState("")    
    const [ingredients, setIngredients] = useState([])
    const [loaded, setLoaded] = useState(true)

    useEffect(() => {
        let loader = document.getElementById("loaderRandom")

        if(loaded === true){
          loader.style.display = "none"
        } else {
          loader.style.display = "initial"
        }
      })

    const random = () => {

        
        setRecipe("")
        setName("")
        setAlcoholic("")
        setCategory("")
        setGlass("")
        setImage("")
        setIngredients([])
        setLoaded(false)        
       
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((response) => {

                      setLoaded(true)
                      setRecipe(response.data.drinks[0].strInstructions)
                      setName(response.data.drinks[0].strDrink)
                      setAlcoholic(response.data.drinks[0].strAlcoholic)
                      setCategory(response.data.drinks[0].strCategory)
                      setGlass(response.data.drinks[0].strGlass)
                      setImage(response.data.drinks[0].strDrinkThumb) 

                    
                      let k=1

                      while(response.data.drinks[0]["strIngredient" + k]){   
                        setIngredients([...ingredients, response.data.drinks[0]["strIngredient" + k]]) 
                        k++
                      } 
                     

        })
    }


    return (<div>
                <NavBar />
                <p>Are you in doubt? Let me decide for you!</p>
                <button onClick={ random }>GET COCKTAIL</button>
                <img src= { image } /><br></br>  
                        { name }<br></br>
                        { recipe }<br></br>
                        { alcoholic }<br></br>
                        { glass }<br></br>
                        { category }<br></br>
                        { ingredients.map(item => <p>{ item }</p>) }
                <p id="loaderRandom">...loading</p>
            </div>)
}