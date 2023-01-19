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
margin: auto;
flex-direction: column;
input{
    width: 303px;
    height: 45px;
    margin-top: 15px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    background-color: #fff;
    font-size: 14px;
    font-family: Raleway;
    ::placeholder{
        color: #7e7e7e;
        font-size: 14px;
        font-weight: 400;
    }
}
button{
    width: 303px;
    height:45px;
    background-color: #ff4791;
    margin: 20px auto 0px;
    border-radius: 5px;
    border-style: none;
    color: #fff;
    font-family: Raleway;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
}
`

export const TextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 130px;
h3{
    font-size: 14px;
    font-family: Raleway;
    font-weight: 400;
    align-items: center;
    color: #fff;
}
a{
        color: #fff;
    }
`