import { createContext, useContext , useState, useEffect, useReducer} from "react";

const themes = {

  dark:{
    theme: false,
    bgColor: 'black',
    color: 'white'

  },
  light:{
    theme: false,
    bgColor: 'white',
    color: 'black'

  }

}

const initialState = {theme: "light"}
const reducer = (state , action) => {
  switch(action.type){
    case 'SWITCH DARK': 
      return themes.dark
    case 'SWITCH LIGHT': 
      return themes.light
      default:
        throw new Error ();

  }
}

const GlobalStates = createContext()

const Context = ({ children }) => {

  const [favs,setFavs] = useState([])

  const [state,dispach] = useReducer(reducer, initialState)

  const url = `https://jsonplaceholder.typicode.com/users/`
  const [doctor, setDoctor] = useState([])
  useEffect ( () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDoctor(data))
  
  },[url])

  return (
    <GlobalStates.Provider 
      value={{doctor,setDoctor,state,dispach,favs,setFavs
      }}
    >
      {children}
    </GlobalStates.Provider>
    
  );
};

export default Context

export const useGlobalStates = () => useContext(GlobalStates)