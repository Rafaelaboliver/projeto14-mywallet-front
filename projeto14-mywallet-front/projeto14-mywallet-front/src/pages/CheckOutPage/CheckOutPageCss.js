import styled from "styled-components";

export const CheckOutContainer = styled.div`
display: flex;
flex-direction: column;

justify-content: start-end;
background-color: #8c11be;
height: 100vh;
max-height: 100vh;
width: 100vw;
max-width: 412px;
padding: 25px 25px;
position: relative;
`

export const Title = styled.h1`
font-family: "Raleway";
font-weight: 700;
font-size: 26px;
line-height: 30px;
color: #ffffff;
margin-left: 20px;
margin-top: 25px;
`

export const DataContainer = styled.div`
width: 305px;
margin: auto;
display: flex;
align-items: center;
margin: 30px auto 0px;
flex-direction: column;
input{
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    width: 326px;
    height: 58px;
    margin-bottom: 13px;
    padding: 10px;
    border: none;
    border-radius: 5px;  
    pointer-events: ${(props) => (props.disabled ? "none" : "all")};
    background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
    color: ${(props) => (props.disabled ? "#AFAFAF" : "#666666")};
    &::placeholder {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
}
button{
    width: 326px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    pointer-events: ${(props) => (props.disabled ? "none" : "all")};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    background: #a328d6;
    color: #ffffff;
    &:hover {
        background: #9c25cc;
    }
    s &:active {
        background: #9522c2;
    }
    &:focus {
        outline: none;
    }
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
}
`