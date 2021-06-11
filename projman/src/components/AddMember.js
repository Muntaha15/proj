import React , {useState} from 'react'
import {Container , Form , Modal , Col , Button} from "react-bootstrap"
import Send from "./Send"



export default function AddMember(props) {

    const [show, setShow] = useState(false);

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [role , setRole ] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleSubmit(){
        var obj = {
            project : props.project,
            name : name ,
            email : email,
            role : role,
            tasks : [],
            special : [],
        }

        sendToBackend(obj);
        handleClose()
    }

    function sendToBackend(obj){
        Send(obj , "member");
        console.log(obj);
        console.log("adding new member to" + props.project);
    }

    
    return (
        <Container>
            <Button onClick={handleShow} style={{margin : "20px auto 20px auto"}}>Add Member</Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Form >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"  onChange={(e)=>{setName(e.target.value)}} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" placeholder="Org. name"  onChange={(e)=>{setRole(e.target.value)}} />
                        </Form.Group>

                    </Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Org. name"  onChange={(e)=>{setEmail(e.target.value)}} />
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
        </Container>
    )
}
