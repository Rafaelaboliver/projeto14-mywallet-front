import { LoginContainer, Title, DataContainer, TextContainer } from "./LoginPageCss";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import apiAuth from "../../services/apiAuth";


export default function LoginPage () {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const [form, setForm] = useState({ email: "", password: "" });

    function loginMyWallet(e) {
        e.preventDefault();

    apiAuth
      .singIn(form)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    }

    function handleForm(e) {
        setForm({ ...form, [e.target.id]: e.target.value });
      }

  

    return (
        <LoginContainer>
            <Title>MyWallet</Title>
        
            <DataContainer>
                <form onSubmit={loginMyWallet}>
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