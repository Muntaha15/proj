import React , {useState} from 'react'
import { Form , Button , Container , Modal , Col , Tooltip , OverlayTrigger} from "react-bootstrap"
import DatePicker from "react-date-picker"
import Send from "./Send"

export default function AddProjForm() {

    const [show, setShow] = useState(false);
    const [start , setStart] = useState(new Date());
    const [deadline , setDeadline] = useState(new Date());
    const [name , setName] = useState("");
    const [org , setOrg] = useState("");
    const [duration , setDuration] = useState("");
    const [showForm  , setShowForm] = useState({display : "true"})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleSubmit(){
        console.log(duration)
        var obj = {
            name  : name,
            org : org,
            link : "",
            start : start.toString(),
            deadline : deadline.toString(),
            members : [],
            checkpoints : [],
            special : [],
            status : "Ongoing",
            duration : duration
        }

        sendToBackend(obj);
        setShowForm({display : "false"})
        setTimeout(()=>{setShowForm({display : "true"}) ; handleClose()} , 90000)
        
        
    }

    function sendToBackend(obj){
        Send(obj , "project");
        console.log(obj);
        console.log("creating project in the backend");
    }

    
    return (
        <Container style={{justifyContent : "center"}}>
            <OverlayTrigger
            overlay={
                <Tooltip>
                    Start a <b>new Project</b> !
                </Tooltip>
            }>
            <Button onClick={handleShow} style={{
                height : "50px",
                width : "50px",
                borderRadius : "50%",
                
                textAlign : "center",
            }}>+</Button></OverlayTrigger>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please add the relevent details</Modal.Body>
                <div style={showForm}>
                <Form >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"  onChange={(e)=>{setName(e.target.value)}} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Organization</Form.Label>
                        <Form.Control type="text" placeholder="Org. name"  onChange={(e)=>{setOrg(e.target.value)}} />
                        </Form.Group>

                    </Form.Row>
                    <Form.Group  controlId="formGridPassword">
                    <Form.Label>Start Date</Form.Label>
                    <DatePicker onChange={setStart} value = {start}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Duration (Ex : "60s")</Form.Label>
                        <Form.Control type="text" placeholder="Org. name"  onChange={(e)=>{setDuration(e.target.value)}} />
                    </Form.Group>
                </Form>
                </div>
                {
                    ()=>{
                        if(showForm=={display : "false"}){
                            return <h2>Please wait as set up the sheet in the back end</h2>
                        }
                    }
                }
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
