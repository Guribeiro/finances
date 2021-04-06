import React from 'react';

import { Container } from './styles';
import IncomeIcon from '../../assets/income.svg';
import OutcomeIcon from '../../assets/outcome.svg';
import TotalIcon from '../../assets/total.svg';

const Summary:React.FC = () => (
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={IncomeIcon} alt="income icon"/>
            </header>
            <strong>R$ 17.400,00</strong>
        </div>
        <div>
            <header>
                <p>Entradas</p>
                <img src={OutcomeIcon} alt="income icon"/>
            </header>
            <strong>R$ 17.400,00</strong>
        </div>
        <div>
            <header>
                <p>Entradas</p>
                <img src={TotalIcon} alt="income icon"/>
            </header>
            <strong>R$ 17.400,00</strong>
        </div>
    </Container>
)

export default Summary;