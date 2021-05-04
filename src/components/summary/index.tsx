import React, { useContext } from 'react';

import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';
import IncomeIcon from '../../assets/income.svg';
import OutcomeIcon from '../../assets/outcome.svg';
import TotalIcon from '../../assets/total.svg';

const Summary: React.FC = () => {

    const { transactions } = useTransactions()

    const { deposits, withdraws, total } = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount
        }

        return acc

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeIcon} alt="income icon" />
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(deposits)
                }</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeIcon} alt="income icon" />
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(withdraws)
                }</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={TotalIcon} alt="income icon" />
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(total)
                }</strong>
            </div>
        </Container>
    )
}

export default Summary;