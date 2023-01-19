import { CheckOutContainer, DataContainer, Title } from './CheckOutPageCss';
import { useState } from 'react';

export default function CheckOutPage() {
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    

    function handleCheckIn (e) {
        e.preventDefault();
    }

    return (
        <CheckOutContainer>

            <Title>Nova saída</Title>

            <DataContainer>
                <form onSubmit={handleCheckIn}>
                    <input
                        id='valor'
                        type='text'
                        value={valor}
                        placeholder='Valor'
                        onChange={e => setValor(e.target.value)}
                        required
                    />

                    <input
                        id='descricao'
                        type='descricao'
                        value={descricao}
                        placeholder='Descrição'
                        onChange={e => setDescricao(e.target.value)}
                        required
                    />

                    <button type='submit'>Salvar saída</button>
                </form>
            </DataContainer>
        </CheckOutContainer>
    )
}