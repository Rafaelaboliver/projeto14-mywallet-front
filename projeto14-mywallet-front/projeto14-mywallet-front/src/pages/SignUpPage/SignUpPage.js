import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {SignUpContainer, Title, DataContainer, TextContainer} from './SignUpPageCss';
import apiAuth from '../../services/apiAuth';

export default function SignUpPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
    });
    
    function handleForm(e) {
        setForm({ ...form, [e.target.id]: e.target.value });
      }
    

    function createAccount(e) {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
          }
      
          //body without "confirmPassword"
          const body = {
            name: form.name,
            email: form.email,
            password: form.password,
          };
      
          apiAuth
            .singUp(body)
            .then((res) => {
              console.log(res.data);
              navigate("/");
            })
            .catch((err) => {
              console.log(err.response.data);
            });
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
                        value={form.name}
                        placeholder='Nome'
                        onChange={handleForm}
                        required
                    />

                    <input
                        id='email'
                        type='email'
                        value={form.email}
                        placeholder='E-mail'
                        onChange={handleForm}
                        required
                    />

                    <input
                        id='password'
                        type='password'
                        value={form.password}
                        placeholder='Senha'
                        onChange={handleForm}
                        required
                    />

                    <input
                        id='confirmPassword'
                        type='password'
                        value={form.confirmPassword}
                        placeholder='Confirme a senha'
                        onChange={handleForm}
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