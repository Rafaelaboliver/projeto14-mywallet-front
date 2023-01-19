import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {SignUpContainer, Title, DataContainer, TextContainer} from './SignUpPageCss';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    function createAccount(e) {
        e.preventDefault();
        navigate('/');
    }
    return (
        <SignUpContainer>

            <Title>
                MyWallet
            </Title>

            <DataContainer>
                <form onSubmit={createAccount}>
                    <input
                        id='name'
                        type='text'
                        value={name}
                        placeholder='Nome'
                        onChange={e => setName(e.target.value)}
                        required
                    />

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

                    <input
                        id='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        placeholder='Confirme a senha'
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    />


                    <button type='submit' >Cadastrar</button>
                </form>

                <TextContainer>
                    <Link to='/'>
                        <h3>Já tem uma conta? Entre agora!</h3>
                    </Link>
                </TextContainer>
            </DataContainer>

        </SignUpContainer >
    )
}