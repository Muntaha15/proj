import React , {useState} from 'react'
import {Modal , Form , Button  , ListGroup , Col} from "react-bootstrap"
import Send from "./Send"

export default function AddCheckpoint(props) {
    
    const [show, setShow] = useState(false);

    const [point , setPoint] = useState("");
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleSubmit(){
        var obj = {
            type : "checkpoint",
            project : props.project,
            checkpoint : point
        }

        sendToBackend(obj);
        handleClose()
    }

    function sendToBackend(obj){
        Send(obj , "checkpoint"  , "none");
        console.log(obj);
        console.log("adding new member to" + props.project);
    }

    
    return (
        <div>
            <ListGroup.Item variant="primary" onClick={handleShow}>Add Description</ListGroup.Item>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please add the project description</Modal.Body>
                <Form >
                    
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Add CheckPoint</Form.Label>
                    <Form.Control type="textarea" placeholder="Org. name"  onChange={(e)=>{setPoint(e.target.value)}} />
                    </Form.Group>
                    
                </Form>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
