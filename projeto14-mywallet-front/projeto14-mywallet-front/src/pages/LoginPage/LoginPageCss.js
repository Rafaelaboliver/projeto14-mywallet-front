import styled from 'styled-components';

export const Title = styled.h1`
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #ffffff;
`;

export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #8c11be;
height: 100vh;
max-height: 100vh;
width: 100vw;
max-width: 412px;
padding: 25px 25px;
position: relative;
`

export const DataContainer = styled.div`
width: 305px;
margin: auto;
display: flex;
align-items: center;
margin: 30px 0 25px;
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

export const TextContainer = styled.div`
display: flex;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
h3{
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: #ffffff;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
}
a{
        color: #fff;
    }
`