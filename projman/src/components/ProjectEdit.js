
import { checkPropTypes } from "prop-types"
import React from "react"
import {Button ,Modal  , Form  , Dropdown , ButtonGroup} from "react-bootstrap"
import {Link} from "react-router-dom"
import DeleteSend from "./DeleteSend.js"
import EditSend from "./EditSend.js"

const EditModal = ( props)=>{
    
    const [data , setData] = React.useState({
        name : "#SAME",
        org : "#SAME",
        status : "#SAME",
        project : props._id
    })
    const [name , setName] = React.useState("#SAME")
    const [org , setOrg] = React.useState("#SAME")
    const [duration , setDuration] = React.useState("#SAME")



    function editRequest(){
        console.log("sending the edit request of project")
        const obj = {
            name : name,
            org : org,
            duration : duration,
            project : props._id
        }

        EditSend(obj , "project")
        
    }

    


    return(
        <Modal show={props.showEdit} onHide={()=>{props.setShowEdit(false)}} >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Please rewrite the quatities you wish to edit.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Current properties</h3>
                    <ul>
                        <li>Name : {props.name}</li>
                        <li>org : {props.org}</li>
                        <li>status : {props.duration}</li>
                    </ul>
                    <Form>
                        <Form.Group  controlId="formGridPassword" style={{display : false}}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name"  onChange={(e)=>{setName(e.target.value)}} />
                        </Form.Group>
                        <Form.Group  controlId="formGridPassword" style={{display : false}}>
                            <Form.Label>Org</Form.Label>
                            <Form.Control type="text" placeholder="Name"  onChange={(e)=>{setOrg(e.target.value)}} />
                        </Form.Group>
                        <Form.Group  controlId="formGridPassword" style={{display : false}}>
                            <Form.Label>Duration</Form.Label>
                            <Form.Control type="text" placeholder="Name"  onChange={(e)=>{setDuration(e.target.value)}} />
                        </Form.Group>
                        
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={()=>{props.setShowEdit(false); editRequest()}} variant="danger">Done</Button>
                <Button onClick={()=>{props.setShowEdit(false)}}>Close</Button>
                </Modal.Footer>

                </Modal>
    )
}


function ProjectEdit(props){
    const [show , setShow] = React.useState(false)
    const [showEdit , setShowEdit] = React.useState(false)

    function DeleteProject(){
        console.log("Deleting the project");
        const obj  = {
            project : props._id
        }

        DeleteSend(obj , "project")
        window.location.reload()
        
    }


    const DDButton = (props)=>{ 
        
        return(
            <>
            <Dropdown as={ButtonGroup}>
            <Link to= {props.link}><Button variant="success"> Veiw</Button></Link>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu >
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
                <Button onClick={()=>{setShow(false);DeleteProject();}} variant="danger">Yes, Delete.</Button>
                <Button onClick={()=>{setShow(false)}}>Close</Button>
                </Modal.Footer>
                
                </Modal>
                <EditModal showEdit = {showEdit} 
                setShowEdit={setShowEdit} 
                name = {props.name}
                org  = {props.org}
                duration = {props.duration}
                _id = {props._id}
                />

            </Dropdown>

            </>
        )
    }

    return(
        <DDButton 
        name = {props.name}
        org = {props.org}
        duration = {props.duration}
        link = {props.link}
        _id = {props._id} />
    )

}

export default ProjectEdit