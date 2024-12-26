import React, { createContext, useState } from 'react'

export const addProjectResponseContext=createContext()

function ContextShare({children}) {
    const [addProjectResponse,setAddProjectResponse] = useState("")
    return(
        <div>
            <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
            {children}
            </addProjectResponseContext.Provider>
        </div>
    )
}
export default ContextShare