import React, { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { Container } from './styles';

const TransacationTable: React.FC = () => {

    useEffect(() =>{
        api.get('transactions')
        .then(response => console.log(response.data))
    },[])
    return  (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desevolvimento de website</td>
                        <td>$12.000.00</td>
                        <td>Freelance</td>
                        <td>20/03/2021</td>
                    </tr>
                    <tr>
                        <td>Desevolvimento de website</td>
                        <td>$12.000.00</td>
                        <td>Freelance</td>
                        <td>20/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}

export default TransacationTable