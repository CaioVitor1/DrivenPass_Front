import Topo from "./Topo"
import styled from "styled-components";
import axios from "axios";
import UserContext from "../context/UserContext";
import { useContext, useState, useEffect } from "react";
export default function UnicContent(){
    const { user, setUser } = useContext(UserContext);
    const { page, setPage } = useContext(UserContext);
return(
    <UnicContentBody>
        <Topo />
    </UnicContentBody>
)
}

const UnicContentBody = styled.div`

`