import chain from "../assets/chain.png"
import vector from "../assets/Vector.png"
import styled from "styled-components";

export default function Topo() {
    return(
        <TopoBody>
            <img src={chain} />
            <h2> DrivenPass</h2>
            <img src={vector} />
        </TopoBody>
    )
}

const TopoBody = styled.div`
width: 380px;
display: flex;
justify-content: space-between;
align-items: center;
;
img{
    width: 45px;
height: 60px;
}
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
`