import React from 'react';
import { Container } from './styles';

import Summary from '../../components/summary';
import TransactionTable from '../../components/transactionTable';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )

}

export default Dashboard;