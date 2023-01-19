import { CheckInContainer, DataContainer, Title } from './CheckInPageCss'
import { useState } from 'react';

export default function CheckInPage() {
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    

    function handleCheckIn (e) {
        e.preventDefault();
    }

    return (
        <CheckInContainer>

            <Title>Nova entrada</Title>

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

                    <button type='submit'>Salvar entrada</button>
                </form>
            </DataContainer>
        </CheckInContainer>
    )
}