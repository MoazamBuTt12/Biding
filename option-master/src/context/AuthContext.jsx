import React, { useEffect, useState, createContext } from "react";
import axios from 'axios';

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggIn, setLoggIn] = useState(undefined);
    async function getLoggedIn(){
        const loggedInRes = await axios.get("http://localhost:8000/auth/loggedIn");
        setLoggIn(loggedInRes.data);
        console.log(loggIn)
    }

    useEffect(() => {
        getLoggedIn();
    }, [])

    return(
        <AuthContext.Provider value={{loggIn, getLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export  { AuthContextProvider };