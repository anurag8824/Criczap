import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext()

export const useMyContext = () => useContext(MyContext)

const MyProvider = ({ children }) => {
    const [cdata, setData] = useState("Hello from Context!");

    // yahan pr main response api call hogi for setdata to pass using provider 
    // fhir vo upar state me data ko set kr denge



    return (
        <MyContext.Provider value={{ cdata, setData }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider 

