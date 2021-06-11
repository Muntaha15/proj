import React, { useState } from "react";
import "./MemberCard.css"
import {Button , Dropdown , ButtonGroup , Modal , Form} from "react-bootstrap"
import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom"
import EditSend from "./EditSend"
import DeleteSend from "./DeleteSend"

const EditModal = ({showEdit , setShowEdit ,  member , memberId , projectId })=>{
    
    

    const [name , setName] = React.useState("#SAME")
    const [role , setRole] = React.useState("#SAME")
    const [email , setEmail] = React.useState("#SAME")


    function editRequest(){
        console.log("sending the edit request of member")
        console.log(name)
        
        const obj={
            name : name,
            role : role,
            email : email,
            project : projectId,
            member : memberId
        }

        EditSend(obj , "member")

    }

    


    return(
        <Modal show={showEdit} onHide={()=>{setShowEdit(false)}} >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Please rewrite the quatities you wish to edit.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Current properties</h3>
                    <ul>
                        <li>Name : {member.name}</li>
                        <li>Role : {member.role}</li>
                        <li>Email : {member.email}</li>
                    </ul>
                    <Form>
                        <Form.Group  controlId="formGridPassword" style={{display : false}}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name"  onChange={(e)=>{setName(e.target.value)}} />
                        </Form.Group>
                        <Form.Group  controlId="formGridPassword" style={{display : false}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Name"  onChange={(e)=>{setEmail(e.target.value)}} />
                        </Form.Group>
                        <Form.Group  controlId="formGridPassword" style={{display : false}}>
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" placeholder="Name"  onChange={(e)=>{setRole(e.target.value)}} />
                        </Form.Group>
                        
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={()=>{setShowEdit(false); editRequest()}} variant="danger">Done</Button>
                <Button onClick={()=>{setShowEdit(false)}}>Close</Button>
                </Modal.Footer>

                </Modal>
    )
}


function MemberCard(props){

    const [show , setShow] = React.useState(false)
    const [showEdit , setShowEdit] = React.useState(false)

    let location = useLocation()
    
    let link = {
        pathname : "/memberpage" +  "/" + props._id,
        state : {
            project : location.state._id,
            member : {
                name : props.name,
                email : props.email,
                role : props.role,
                _id : props._id
            }

        }
    }

    

    const mainStyle = {
        display : "flex",
        justifyContent : "space-between",
        backgroundColor :'white',
        borderRadius : "15px",
        height : "60px",
        boxShadow : "10px 10px 8px 10px #888888;",
        marginTop : "10px",
        marginBottom : "10px"
        
    };

    function DeleteMember(){
        console.log( "Deleteing the member : " + props.name);
        const obj = {
            project : props.project,
            member : props._id
        }
        DeleteSend(obj , "member")
    }

    function DeleteConformation(){
        console.log("Alert! Are you sure you want to delete the member.")
        DeleteMember();
    }

    const DDButton = (props)=>{ 
        return(
            <>
            <Dropdown as={ButtonGroup}>
            <Link to= {link}><Button variant="success"> Veiw</Button></Link>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
            <Dropdown.Item  onClick={()=>{console.log("sure?");setShowEdit(true)}}  style={{ textAlign : "center" ,  backgroundColor : "white"}}><b>Edit</b></Dropdown.Item>
            <Dropdown.Item  onClick={()=>{console.log("sure?");setShow(true)}}  style={{color :"red" , backgroundColor : "lightPink" , textAlign : "center"}}><b>Delete</b></Dropdown.Item>
            
                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
            
                {/* <DeletionWarning onConfirm={DeleteMember} show={show} onHide={()=>{setShow(false)}} /> */}
                <Modal show={show} onHide={()=>{setShow(false)}} >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Are you sure about this?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <p>
                    Deletion of the project will delete all the related data,
                    including the spreadsheets.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={()=>{setShow(false);DeleteMember();}} variant="danger">Yes, Delete.</Button>
                <Button onClick={()=>{setShow(false)}}>Close</Button>
                </Modal.Footer>
                
                </Modal>
                <EditModal showEdit = {showEdit} setShowEdit={setShowEdit} member={props.link.state.member} memberId = {props._id} projectId={props.project}/>

            </Dropdown>

            </>
        )
    }
    return(

        <div style={mainStyle}>
            <div className="listcard-element">{props.name=="none"?<b>Name</b>:props.name}</div>
            <div className="listcard-element">{props.email=="none"?<b>Email</b>:props.email}</div>
            <div className="listcard-element">{props.role=="none"?<b>Role</b>:props.role}</div>
            <div className="listcard-element">{props.name=="none"?"":<DDButton link={link} project = {props.project} _id={props._id}/>}</div>
        </div>
    )
}

export default MemberCard