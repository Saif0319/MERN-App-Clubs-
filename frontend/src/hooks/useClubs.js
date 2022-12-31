import { useContext } from "react"
import { ClubsContext } from "../context/ClubsContext"


export const useClubs = () => {
    
    const context = useContext(ClubsContext)
    
    if(!context) {
        throw Error("CONTEXT DOES NOT EXIST!")
    }

    return context
}

