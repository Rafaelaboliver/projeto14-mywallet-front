import styled from "styled-components";

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #8c11be;
height: 100vh;
max-height: 100vh;
width: 100vw;
max-width: 412px;
`

export const Title = styled.div`
display: flex; 
align-items: center;
width: 100vw;
max-width: 326px;
justify-content: space-between;
margin-top: 25px;

h1{
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #ffffff;  
}
ion-icon{
    width: 30px;
    height: 30px;
    color: #fff;
}
`

export const DataContainer = styled.div`
width: 326px;
height: 446px;
display: flex;
flex-direction: column;
align-items: center;
margin: 22px auto 0px;
background-color: #FFF;
border-radius: 5px;
justify-content: space-between;
scrollable: true;
overflow-y: auto;

`
export const InitialMessage = styled.div`
text-align: center;
justify-content: center;
margin: auto;
display: flex;
width: 180px;
height: 46px;
p{
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #868686;
}
`

export const Bottom = styled.div`
display: flex; 
align-items: center;
width: 100vw;
max-width: 340px;
justify-content: space-around;
margin: 15px 0px 0px;
`

export const CheckIn = styled.button`
width: 155px;
height: 114px;
display: flex;
flex-direction: column;
align-items: left;
justify-content: space-around;
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
h3{
    margin-left: 10px;
}
ion-icon{
    margin-left: 10px;
}
`
export const CheckOut = styled.button`
width: 155px;
height: 114px;
display: flex;
flex-direction: column;
align-items: left;
justify-content: space-around;
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
h3{
    margin-left: 10px;
}
ion-icon{
    margin-left: 10px;
}
`
export const DescriptionContainer = styled.li`
width: 326px;
display: flex;
flex-direction: raw;
justify-content: space-between;
margin-top: 15px;
padding: 0pc 15px 0px;
`

export const Day = styled.div`
color: #C6C6C6;
p{
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    
}
`
export const Item = styled.div`
color: #000;
p{
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
}
`
export const Value = styled.div`
color: ${(props) => (props.type === "in" ? '#03AC00' : '#C70000')};
p{
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
}
`
export const TotalContainer = styled.div`
width: 326px;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 2px;
padding: 0pc 15px 0px;
background-color: #fff;
position: sticky;
bottom: 0;
z-index: 1;

p{
    color: ${(props) => (props.balance > 0 ? '#03AC00' : '#C70000')};
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
}


h3{
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    background-color: #fff;
}
`