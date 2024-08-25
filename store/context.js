"use client"
import { createContext, useState } from "react";

export const DarkContext = createContext();

export default function Provider({children}){
    const [dark, setDark] = useState(true);

    function changeMode(){
        setDark(!dark);
    }
    return(
        <DarkContext.Provider value={{changeMode, dark}}>
            {children}
        </DarkContext.Provider>
    )
}