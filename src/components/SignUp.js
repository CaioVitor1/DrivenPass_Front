import styled from "styled-components";
import react from "react";
import { Link,  useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import chain from "../assets/chain.png"

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 
  
    function register () {
        const body = { 
            email,
            password
        }
       
        const promise = axios.post("https://driven-pass-back.herokuapp.com/signin", body)
        promise
        .then(res => {
            navigate('/');
        })
        .catch(res => {
            console.log("deu ruim")
            alert("Você inseriu dados inválidos ou já cadastrados.")
        })
    }


    return (
        <BodySignUp>
            <InitialPageBody>
               
                    <Title>
                        <img src={chain}/>
                        <h2> Driven Pass</h2>
                        
                    </Title>
               
            </InitialPageBody>
            <h3> Usuário (email)</h3>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <h3> senha</h3>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
            <button onClick={register}> Criar</button> 
            <button onClick={() => navigate('/')}> Voltar </button> 
    </BodySignUp>
)
}

const BodySignUp = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
padding-bottom: 170px;

input {
width: 326px;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: black;
margin-left: 18px;
margin-bottom: 13px;
}
button {
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #000000;
width: 250px;
height: 40px;
background: #9BFBB0;
border: 3px solid #9BFBB0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-bottom: 10px;
}
button:last-child{
    border: 3px solid #FB9B9B;
    background: #FB9B9B;
}
h3{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    /* identical to box height */
    text-align: center;

    color: #000000;
}
`

const InitialPageBody = styled.div `
background-color: #FFFFFF;
width: 900px;
margin: 0 auto;
box-sizing: border-box;
font-family: 'Lexend Deca', sans-serif;
margin-bottom: 60px;
`


const Title = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;

        color: #005985;
    }
    img{
        width: 113px;
        height: 154px;

       
    }
`