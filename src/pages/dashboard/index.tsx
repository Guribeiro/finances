import React from 'react';
import { Container } from './styles';

import Summary from '../../components/Summary';
import TransactionTable from '../../components/TransactionTable';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )

}

export default Dashboard;