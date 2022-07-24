import Axios from "axios"
import { useEffect, useState } from 'react';
import "../css/allCocktails.css"
import { NavBar } from './navBar';

function AllCoctails() {


  const [cocktailData, setCocktailData] = useState([])
  const [axiosReference, setAxiosReference] = useState(0)
  const [loaded, setLoaded] = useState(false)

  
  useEffect(() => {
      let loader = document.getElementById("loaderName")

      if(loaded === true){
        loader.style.display = "none"
      } else {
        loader.style.display = "initial"
      }

      Axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a" )
           .then((response) => {  
            setLoaded(true) 
            setAxiosReference(0)
             if(axiosReference === 0){                 
              for(let i=0; i< response.data.drinks.length; i++){        
                  setCocktailData(oldArray => [...oldArray, [response.data.drinks[i].strDrink, response.data.drinks[i].strDrinkThumb]])                                       
                } 
             }       
            setAxiosReference(1)                                  
           })
     }
  )


  const chooseFirstLetter = (code) => {    
    
    const letter = document.getElementById(code).innerText.toLowerCase()
    setLoaded(false) 
    document.getElementById("noCocktail").style.display = "none"

    Axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letter )
         .then((response) => {
              setLoaded(true) 
              
              setCocktailData([])

              for(let i=0; i< response.data.drinks.length; i++){        
                   setCocktailData(oldArray => [...oldArray, [response.data.drinks[i].strDrink, response.data.drinks[i].strDrinkThumb]])                                       
                  }                 
                } 

          ).catch(() => {
              setLoaded(true) 
              document.getElementById("noCocktail").style.display = "initial"
              document.getElementById("noCocktail").innerText += letter
          })
  }  
   


    
  


  return (
    <div className="App">
      <NavBar />      
      <div id="buttonWrapper">    
        <button className="alphabetButton" id="a" onClick={ () => chooseFirstLetter("a") }>A</button> 
        <button className="alphabetButton" id="b" onClick={ () => chooseFirstLetter("b") }>B</button>  
        <button className="alphabetButton" id="c" onClick={ () => chooseFirstLetter("c") }>C</button> 
        <button className="alphabetButton" id="d" onClick={ () => chooseFirstLetter("d") }>D</button> 
        <button className="alphabetButton" id="e" onClick={ () => chooseFirstLetter("e") }>E</button> 
        <button className="alphabetButton" id="f" onClick={ () => chooseFirstLetter("f") }>F</button>  
        <button className="alphabetButton" id="g" onClick={ () => chooseFirstLetter("g") }>G</button> 
        <button className="alphabetButton" id="h" onClick={ () => chooseFirstLetter("h") }>H</button> 
        <button className="alphabetButton" id="i" onClick={ () => chooseFirstLetter("i") }>I</button>
        <button className="alphabetButton" id="j" onClick={ () => chooseFirstLetter("j") }>J</button>   
        <button className="alphabetButton" id="k" onClick={ () => chooseFirstLetter("k") }>K</button> 
        <button className="alphabetButton" id="l" onClick={ () => chooseFirstLetter("l") }>L</button> 
        <button className="alphabetButton" id="m" onClick={ () => chooseFirstLetter("m") }>M</button> 
        <button className="alphabetButton" id="n" onClick={ () => chooseFirstLetter("n") }>N</button> 
        <button className="alphabetButton" id="o" onClick={ () => chooseFirstLetter("o") }>O</button> 
        <button className="alphabetButton" id="p" onClick={ () => chooseFirstLetter("p") }>P</button> 
        <button className="alphabetButton" id="q" onClick={ () => chooseFirstLetter("q") }>Q</button> 
        <button className="alphabetButton" id="r" onClick={ () => chooseFirstLetter("r") }>R</button> 
        <button className="alphabetButton" id="s" onClick={ () => chooseFirstLetter("s") }>S</button>
        <button className="alphabetButton" id="t" onClick={ () => chooseFirstLetter("t") }>T</button>
        <button className="alphabetButton" id="u" onClick={ () => chooseFirstLetter("u") }>U</button>
        <button className="alphabetButton" id="v" onClick={ () => chooseFirstLetter("v") }>V</button>
        <button className="alphabetButton" id="w" onClick={ () => chooseFirstLetter("w") }>W</button>
        <button className="alphabetButton" id="x" onClick={ () => chooseFirstLetter("x") }>X</button>
        <button className="alphabetButton" id="y" onClick={ () => chooseFirstLetter("y") }>Y</button>
        <button className="alphabetButton" id="z" onClick={ () => chooseFirstLetter("z") }>Z</button>
      </div>          
      <div className="inputWrapper">
        {cocktailData.map(item => <a class="cocktailLink" href= { "#/" + item[0] } target="_blank">
                                                <div class="cocktailWrapper">                                          
                                                  <img id="cocktailImage" alt="please wait..." src={ item[1]} />
                                                  <p id="cocktailCaption">{ item[0] }</p>
                                                </div>
                                              </a>)}
      </div>      
      <p id="loaderName">...loading</p>
      <p id="noCocktail">No cocktail found with first letter </p>                       
    </div>
  );
}

export default AllCoctails;