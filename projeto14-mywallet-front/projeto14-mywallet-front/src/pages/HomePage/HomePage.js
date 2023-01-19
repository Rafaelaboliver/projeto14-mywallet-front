import { Navigate } from "react-router-dom";
import { Bottom, CheckIn, CheckOut, DataContainer, HomeContainer, Title } from "./HomePageCss";



export default function HomePage () {
    const navigate = Navigate();

    function goCkeckIn () {
    navigate('/nova-entrada');
    };

    function goCkeckOut () {
        navigate('/nova-saida');
    }

    return (
        <HomeContainer>
            <Title>
                <h1>Olá, Fulano</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </Title>

            <DataContainer>
                <p>
                Não há registros de entrada ou saída
                </p>
            </DataContainer>

            <Bottom>
                <CheckIn onClick={goCkeckIn()}>
                <ion-icon name="add-circle-outline"></ion-icon>
                <h3>Nova entrada</h3>
                </CheckIn>

                <CheckOut onClick={goCkeckOut()}>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <h3>Nova saída</h3>
                </CheckOut>
            </Bottom>
        </HomeContainer>
    )
}