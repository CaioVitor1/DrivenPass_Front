import styled from "styled-components";
import react from "react";
import { Link,  Navigate,  useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from "../context/UserContext";
import { useContext } from "react";
import chain from "../assets/chain.png"
import vector from "../assets/Vector.png"
import {AiOutlineWifi} from 'react-icons/ai'
import card from "../assets/card.png"
import pen from "../assets/pen.png"
import Topo from "./Topo"
export default function Main(){
    const { user, setUser } = useContext(UserContext);
    const { page, setPage } = useContext(UserContext);
    const navigate = useNavigate(); 

    function openSafeNote(){
        setPage("Notas Seguras")
        console.log(page)
        navigate('/content')
    }
    function openCredential(){
        setPage("Credenciais")
        console.log(page)
        navigate('/content')
    }
    function openCard(){
        setPage("Cartões")
        console.log(page)
        navigate('/content')
    }
    function openWifi(){
        setPage("Senhas de wifi")
        console.log(page)
        navigate('/content')

    }


    return(
<MainBody>
        <Topo />
<Content>
    <Title>
        <h3>Minhas senhas</h3>
    </Title>
    <Credentials>
        <img onClick={openCredential} src={vector} />
        <h3> Credenciais</h3>
        <Number> 5</Number>
    </Credentials>

    <SafeNote>
        <img onClick={openSafeNote} src={pen} />
        <h3> Notas seguras</h3>
        <Number> 5</Number>
    </SafeNote>

    <Cards>
        <img onClick={openCard} src={card} />
        <h3> Cartões</h3>
        <Number> 5</Number>
    </Cards>

    <Wifi>
        <AiOutlineWifi onClick={openWifi} size={50} color='#005985' />
        <h3> Wifi</h3>
        <Number> 5</Number>
    </Wifi>
   <Add>+</Add>
</Content>
</MainBody>
    )
    

}

const MainBody = styled.div`
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



const Content = styled.div`
margin-top: 20px
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
const Credentials = styled.div`
display: flex;
margin-top:10px;
justify-content: space-between;
align-items: center;

`
const SafeNote = styled.div`

display: flex;
margin-top:10px;
justify-content: space-between;
align-items: center;
`
const Cards = styled.div`

display: flex;
margin-top:10px;
justify-content: space-between;
align-items: center;
`
const Wifi = styled.div`
display: flex;
margin-top:10px;
justify-content: space-between;
align-items: center;
`
const Number = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
width: 35px;
height: 35px;

background: #005985;
/* identical to box height */

color: #FFFFFF;
`

const Add = styled.div`
margin-top: 80px;
margin-left:380px;
border-radius: 100px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 22px;
width: 35px;
height: 35px;
background: #005985;
/* identical to box height */
display: flex;
justify-content: center;
align-items: center;
color: #FFFFFF;
`