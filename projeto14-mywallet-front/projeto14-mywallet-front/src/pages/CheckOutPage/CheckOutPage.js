import { CheckOutContainer, DataContainer, Title } from './CheckOutPageCss';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { apiWallet } from '../../services/apiWallet';

export default function CheckOutPage() {

    const [form, setForm] = useState({ value: "", description: "" });
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    function editForm(e) {
        setForm({ ...form, [e.target.id]: e.target.value });
    }

    function handleCheckIn(e) {
        e.preventDefault();
        const body = { ...form, type: "out" };
        apiWallet
            .addComingWallet(user.token, body)
            .then((res) => {
                console.log(res.data);
                navigate("/home");
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }

    return (
        <CheckOutContainer>

            <Title>Nova saída</Title>

            <DataContainer>
                <form onSubmit={handleCheckIn}>
                    <input
                        id='value'
                        type='number'
                        value={form.value}
                        placeholder='Valor'
                        step='0.01'
                        onChange={editForm}
                        required
                    />

                    <input
                        id='description'
                        type='text'
                        value={form.description}
                        placeholder='Descrição'
                        onChange={editForm}
                        required
                    />

                    <button type='submit'>Salvar saída</button>
                </form>
            </DataContainer>
        </CheckOutContainer>
    )
}