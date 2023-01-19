import { Link } from "react-router-dom";
import { Bottom, CheckIn, CheckOut, DataContainer, HomeContainer, Title } from "./HomePageCss";



export default function HomePage() {

    return (
        <HomeContainer>
            <Title>
                <h1>Olá, Fulano</h1>
                <Link to='/'>
                    <ion-icon name="log-out-outline"></ion-icon>
                </Link>

            </Title>

            <DataContainer>
                <p>
                    Não há registros de entrada ou saída
                </p>
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