import React from 'react';

import { Container, Content } from './styles';

import LogoImage from '../../assets/logo.svg';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenNewTransactionModal }) => (
    <Container>
        <Content>
            <img src={LogoImage} alt='tdmoney-logo-' />
            <button onClick={onOpenNewTransactionModal}>Nova transação</button>
        </Content>
    </Container>
)

export default Header;