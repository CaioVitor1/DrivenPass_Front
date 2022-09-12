import styled from "styled-components";
import Topo from "./Topo";
import UserContext from "../context/UserContext";
import { useContext, useState, useEffect } from "react";
import vector from "../assets/Vector.png"
import {AiOutlineWifi} from 'react-icons/ai'
import card from "../assets/card.png"
import pen from "../assets/pen.png"
import axios from "axios";

function RenderList({title, id, page, user, setUser}){
   function openDescription(){
    console.log("tá aqui")
    setUser(
        {   
            id: id,
        })
        console.log(user)
   }
    return (
        <Options>
            {page === "Credenciais" && (<img onClick={openDescription} src={vector} />)}
            {page === "Notas Seguras" && (<img onClick={openDescription} src={pen} />)}
            {page === "Cartões" && (<img onClick={openDescription} src={card} />)}
            {page === "Senhas de wifi" && (<AiOutlineWifi onClick={openDescription} size={50} color='#005985' />)}
            <h3 onClick={openDescription}> {title} - {id}</h3>
        </Options>
    )
}

export default function CredentialsFunction(){
    const { user, setUser } = useContext(UserContext);
    const { page, setPage } = useContext(UserContext);
    const [data, setData] = useState([])
    let requisition = ""
    
    console.log("tá aqui")
    console.log(page)
    if(page === "Credenciais"){
        requisition = "credentials"
    }
    if(page === "Notas Seguras"){
        requisition = "safeNotes"
    }
    if(page === "Cartões"){
        requisition = "card"
    }
    if(page === "Senhas de wifi"){
        requisition = "wifi"
    }

    useEffect(() => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjkxNTUyNiwiZXhwIjoxNjY1NTA3NTI2fQ.1_TA8MsDpRuf2j05nb9DlgNOOSHPvebffizrewWOvdU"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(`http://localhost:5000/${requisition}`, config)
            promise
            .then(res =>{
            setData(res.data)
            console.log(data)
               
            })
            .catch(err => {
                console.log(err);
                
            })
        }, [])
        console.log("tá aqui")
        console.log(data)
    return(
        <CredentialsBody>
            <Topo />
            <ContentView>
            <Title>
                <h3>{page}</h3>
            </Title>
            {data.map((info, index) => <RenderList setUser={setUser} user={user} page={page} id={info.id} index={index} title={info.title} />)}
           
            </ContentView>
        </CredentialsBody>
    )
}

const CredentialsBody = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
padding-bottom: 170px;
padding:10px;
border:solid;
border-color: gray;
border-width: 1px;
width: 400px;
`

const ContentView = styled.div`

`

const Title = styled.div`
margin-top: 20px;
width: 400px;
height: 41px;

background: #005985;
border: 3px solid #005985;
h3{
    font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;

/* identical to box height */

color: #FFFFFF;
}
`

const Options = styled.div`
margin-top: 20px;
display: flex;
align-items: center;
h3{
    margin-left: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #222222;
}
`