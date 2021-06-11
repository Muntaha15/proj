import React from 'react'
import TeamTable from "./TeamTable"
import CheckPointsList from "./CheckPointsList"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import {   useLocation , Redirect } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TeamMail from "./TeamMail"
import Wave from "react-wavify"
import  LoginPage from "./LoginPage"

library.add(fab);

export default function ProjPage(props) {
      console.log("on projpage")
   
     const [memberList , setMemberList] = React.useState([])
     const [link , setLink] = React.useState("")
     const [checkpoints , setCheckpoints] = React.useState([])
    
    let {state} = useLocation();
    


    React.useEffect(()=>{

        
        

        console.log("before the fetch")
        fetch("http://localhost:9000/members/" + (state._id) , {
            method : "GET",
        }).then(res => res.json()).then(data => {setMemberList(data.list) ; setLink(data.link);setCheckpoints(data.checkpoints)});
        
        

    } ,[])
    
    if(state){

    }else{
      return(
        <Redirect to="/" />
      )
    }
    
    
    return (
        <div  style={{
            backgroundColor : "#99bbff",
            height : "auto"
          }}>
        <Container className= "text-center" style={{width : "100%"}}>
        
            {/* Team table, it will have a name, emailLink , role.
            Clicking on each team will give the notes on that memeber */}
            {/* Then there will be list of task that are going on, people who are working on them 
            and the upcoming deadlines */}
            <Button variant = "dark" href = {link} style={{margin : "20px auto 20px auto"}} >Open SpreadSheet</Button>
            {console.log(link)}
            {console.log(checkpoints)}
            {/* <TeamTable project = {props.project}></TeamTable> */}
            <TeamTable members = {memberList} projectId = {state._id} ></TeamTable>
            <CheckPointsList checkpoints = {checkpoints} projectId = {state._id}></CheckPointsList>
            
            <TeamMail></TeamMail>

            
            
        </Container>
        <Wave fill='#6699ff'
        paused={false}
        options={{
          height: 1,
          amplitude: 20,
          speed: 0.15,
          points: 6
        }}
      />
        </div>
    )
}
