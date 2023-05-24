import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Button = () => {

    const { getLoggedIn } = useContext(AuthContext);
    
    const navigate = useNavigate();

    async function logOut(){
        await axios.get("http://localhost:8000/auth/logout")
        await getLoggedIn();
        navigate('/');
    }
    return(
        <button onClick={logOut} style={{backgroundColor: "inherit", cursor: 'pointer', fontSize: "15.7px", outline: "none", border: "none", color: "white", fontWeight: "600"}}>
           LogOut
        </button>
    );
}

export default Button;