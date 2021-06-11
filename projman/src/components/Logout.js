
import React from "react";
import {GoogleLogout} from "react-google-login";
import {Link} from "react-router-dom";

const clientId = "64080679766-lqssbjjjgi5001n8p6fdvfo98hh421hr.apps.googleusercontent.com"

function Logout(props){
    const onSuccess = () =>{ 
        console.log("[LOGOUT SUCCESS] cuurentUser : ")
    }

    // const onFailure = (res) => {
    //     console.log("[LOGOUT FAILED] res : " + res)
    // }

    return(
        <div>
            <Link to="/post-logout">
            <GoogleLogout 
            clientId = {clientId}
            buttonText = "Log Out"
            onLogoutSuccess = {onSuccess}
            onClick = {()=>{console.log("log ou!!!")}}
             />
             </Link>
        </div>
    )
}

export default Logout;
