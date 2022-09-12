import styled from "styled-components";
import react from "react";
import { Link,  Navigate,  useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function Main(){
    const { user, setUser } = useContext(UserContext);
<>Main</>
}