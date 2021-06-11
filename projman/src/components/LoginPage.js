import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import {Redirect , Switch} from "react-router-dom"
import HomePage from "./HomePage";
import {Container , Row  , Col} from "react-bootstrap"

function LoginPage(props){
    const [loggedIn , setLoggedIn] = React.useState(false);
    const [tokenObj , setTokenObj] = React.useState({})
    const [profileObj , setProfileObj] = React.useState({})



    function giveRender(){
        let location = {
            pathname : "/homepage",
            state : {
                tokenObj : tokenObj,
                profileObj : profileObj
            }
        }
        if(loggedIn){
            console.log("loggedIn is true")
            console.log(profileObj)
            return (<HomePage token = {tokenObj} profile={profileObj}  />)
        }else{
            return(
                <div style={{
                    width : "100%",
                    backgroundColor  : "#99bbff",
                    height : "100vh",
                    position:"relative",
                    
                }}> 
                <div style={{
                    color : "light-blue",
                    height : "200px"
                }}>
                    <h1 style={{
                        color:"white",
                        textAlign : "center"
                    }} >Welcome , Please login to veiw the projects!</h1>
                </div>
                <div style={{
                    
                    
                    paddingRight : "100px",
                    width : "350px",
                    marginLeft : "50vh",
                    paddingLeft : "10%",
                    
                    
                }}> 
                {/* <Container>
                    <Col></Col>
                    <Col> */}
                    <Login setLoggedIn = {setLoggedIn} setTokenObj={setTokenObj} setProfileObj={setProfileObj}/>
                    {/* </Col>
                    <Col></Col>    
                </Container>         */}
                </div>
                </div>

                 )
        }
    }

    return(
        <div>
            {
             giveRender()   
            }
        </div>
    )
}

export default LoginPage;