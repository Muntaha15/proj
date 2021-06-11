import React from 'react'
import Table from "react-bootstrap/Table";
import Projitem from "./Projitem"

import AddProjForm from "./AddProjForm"
import ListCard from "./ListCard"

import Aos from "aos"
import "aos/dist/aos.css"


export default function Projlist(props) {

    React.useEffect(()=>{
        Aos.init();
    } , []);


    return (
        <div>
            {/* <Table striped bordered hover size="sm">
                <thead>
                    <th>Name</th>
                    <th>Org.</th>
                    <th>Status</th>
                    <th></th>
                </thead>
                <tbody>
                    {console.log(props.data)}
                    {
                      
                      props.data.map((proj , key)=>{
                          return <Projitem Name = {proj.name} Org={proj.org}  Status = {proj.status} _id = {proj._id}  />
                      })
                    }
                    
                    
                     */}
                    {/* <Projitem Name = "Story1" Org = "ABC" Status="Ongoing"></Projitem>
                    <Projitem Name = "Story2" Org = "XYZ" Status="Ongoing"></Projitem> */}
                 {/* </tbody> 
            </Table> */}
            <ListCard name = {"none"} org={"none"} status={"none"} _id={"none"}></ListCard>
            {
                      
                      props.data.map((proj , key)=>{
                          console.log(key)
                          return <div data-aos="fade-left" data-aos-duration={`${(10-key)*100}`}><ListCard name = {proj.name} org={proj.org}  duration={proj.duration} _id = {proj._id}  token={props.token} profile={props.profile}  /></div>
                      })
                    }
            <AddProjForm></AddProjForm>
            
        </div>
    )
}
