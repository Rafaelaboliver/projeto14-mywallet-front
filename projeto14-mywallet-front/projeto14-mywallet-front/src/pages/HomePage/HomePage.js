import { Link } from "react-router-dom";
import { Bottom, CheckIn, CheckOut, DataContainer, HomeContainer, Title, DescriptionContainer, Day, Item, Price, TotalContainer } from "./HomePageCss";
import { useState } from "react";



export default function HomePage() {
    const [initialMessage, setInitialMessage] = useState([]);

    return (
        <HomeContainer>
            <Title>
                <h1>Olá, Fulano</h1>
                <Link to='/'>
                    <ion-icon name="log-out-outline"></ion-icon>
                </Link>

            </Title>

            <DataContainer>
                {initialMessage.length === 0 ? (
                    <p>
                        Não há registros de entrada ou saída
                    </p>
                ) : (
                    //aqui iriei fazer o map da variável initialMessage (setInitialMessage vai receber os dados do servidor):
                    <>
                    <DescriptionContainer>
                        <Day>30/11</Day>
                        <Item>Salário</Item>
                        <Price>10000,00</Price>
                    </DescriptionContainer>

                    <TotalContainer>

                    </TotalContainer>
                    </>
                )
                }
            </DataContainer>

            <Bottom>
                <Link to='/nova-entrada'>
                    <CheckIn>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <h3>Nova entrada</h3>
                    </CheckIn>
                </Link>

                <Link to='/nova-saida'>

                    <CheckOut >
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <h3>Nova saída</h3>
                    </CheckOut>
                </Link>
            </Bottom>
        </HomeContainer>
    )
}