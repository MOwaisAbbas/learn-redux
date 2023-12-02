import { createContext, useContext } from "react";
export const CountContext = createContext()

export const useCounter = () =>{
    return useContext(CountContext)
}