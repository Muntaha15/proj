import React from 'react'
import {Card , Container , Button , DropdownButton , Dropdown} from "react-bootstrap"
import TaskCard from "./TaskCard"
import AddTask from "./AddTask"
import {Redirect, useLocation} from "react-router-dom"
import Wave from "react-wavify"
import LoginPage from "./LoginPage"


export default function MemberPage(props) {

    const [taskList , setTaskList] = React.useState([])
    
    const [permission , setPermission] = React.useState("Editor")

    const location = useLocation();
    

    React.useEffect(()=>{
        fetch("http://localhost:9000/tasks/" + projectId + "/" + memberId)
        .then(res => res.json()).then(data => setTaskList(data));
    } , [])

    if(location.state){
      
    }else{
      return (
        <Redirect to = "/" />
      )
    }
    const projectId = location.state.project
    const memberId = location.state.member._id
    const member = location.state.member;
    const params = {projectId : projectId , memberId : memberId}
    
    return (
        <div style={{
            backgroundColor : "#99bbff",
            height : "auto"
          }}>
            <Container style={{
            backgroundColor : "#99bbff",
            height : "auto"
          }}>

            
            <DropdownButton id="dropdown-basic-button" title="Change Permissions" style = {{marginTop : "50px"}}>
                <Dropdown.Item  onClick={()=>{setPermission("Editor")}}>Editor</Dropdown.Item>
                <Dropdown.Item  onClick={()=>{setPermission("Commentor")}}>Commentor</Dropdown.Item>
                <Dropdown.Item  onClick={()=>{setPermission("Viewer")}}>Viewer</Dropdown.Item>
            </DropdownButton>
            <div style = {{marginTop : "50px"}}>
            <Card.Body variant="dark" style={{borderRadius : '20px 20px 0 0 ' , backgroundColor : "white"}}>Name : {" " + member.name}</Card.Body>
            <Card.Body variant="dark" style={{backgroundColor : "white"}}>Email : {" " + member.email}</Card.Body>
            <Card.Body variant="dark" style={{backgroundColor : "white"}}>Role : {" " + member.role}</Card.Body>
            <Card.Body variant="dark" style={{borderRadius : '0 0 20px 20px'  , backgroundColor : "white"}}>Permission : {" " + permission}</Card.Body>
            {/* <Card.Body variant="dark" style={{backgroundColor : "lightPink"}}>Current Tasks</Card.Body> */}
            </div>
            {/* <AddTask member= {member} projectId = {projectId}></AddTask> */}
            <div style={{display : "flex"}}>
            {
                taskList.map((task , key)=>{
                    return <TaskCard task={task} member = {member}></TaskCard>
                })
            }
            </div>
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
