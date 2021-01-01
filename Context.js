import React, {useState,useEffect} from "react"

const Context = React.createContext()

function ContextProvider(props) { 
const [isTrue, setIsTrue] = useState(false)
  
useEffect(() => {
setTimeout(() => {
    if(isTrue === true) {
        
    }
},3000)
}, [input])
    return (
        <Context.Provider value={{}}>
         {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}