import './index.css';
import React from 'react';
import { useParams } from 'react-router-dom';

const EditarLoja = () => {
    const {cnpj} = useParams()
    return (
        <div>
            <text>edição de loja</text>
            <text>{cnpj}</text>
        </div>
    )
}

export default EditarLoja