import { LoginContainer, Title, DataContainer, TextContainer } from "./LoginPageCss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function loginMyWallet(e) {
        e.preventDefault();
        navigate('/home');
    }

    return (
        <LoginContainer>
            <Title>MyWallet</Title>
        
            <DataContainer>
                <form onSubmit={loginMyWallet}>
                    <input
                        id='email'
                        type='email'
                        value={email}
                        placeholder='E-mail'
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <input
                        id='password'
                        type='password'
                        value={password}
                        placeholder='Senha'
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <button type='submit'>ENTRAR</button>
                </form>
            </DataContainer>

            <TextContainer>
                <Link to='/cadastro'>
                    <h3>Primeira vez? Cadastre-se!</h3>
                </Link>
            </TextContainer>
        </LoginContainer>
    )
}