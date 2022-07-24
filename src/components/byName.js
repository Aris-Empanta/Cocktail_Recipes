import axios from "axios"
import { useEffect, useState } from "react"
import { NavBar } from './navBar';

export const ByName = () => {

      const [cocktailData, setCocktailData] = useState([])
      const [error, setError] = useState("")
      const [loaded, setLoaded] = useState(true)

      useEffect(() => {
        let loader = document.getElementById("loaderName")

        if(loaded === true){
          loader.style.display = "none"
        } else {
          loader.style.display = "initial"
        }
      })
      


      const findName = () => {

        setCocktailData([])
        setError("")
        setLoaded(false)

        let name = document.getElementById("inputName").value    
        console.log(name)

      axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name)
           .then((response) => {  
              setLoaded(true)                   
              for(let i=0; i< response.data.drinks.length; i++){        
                  setCocktailData(oldArray => [...oldArray, [response.data.drinks[i].strDrink, response.data.drinks[i].strDrinkThumb]])                                       
                }                                   
            }).catch(() => setError("no such cocktail"))    
      }

    return(<div>
             <NavBar />
             <div className="inputWrapper">
                <div className="inputField">
                  <input type="text" placeholder="Enter cocktail name" id="inputName" />
                  <button id="searchName" onClick={ findName }>Search</button>
                </div >               
                { cocktailData.map(item => <a class="cocktailLink" href= { "#/" + item[0] } target="_blank">
                                              <div class="cocktailWrapper">                                          
                                                <img id="cocktailImage" alt="please wait..." src={ item[1]} />
                                                <p id="cocktailCaption">{ item[0] }</p>
                                              </div>
                                            </a>)}
                <p>{ error }</p>
                <p id="loaderName">...loading</p>
              </div>
           </div>)
}