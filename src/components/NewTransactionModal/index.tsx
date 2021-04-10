import React, { useState, useCallback } from 'react';

import { Container } from './styles';
import closeIcon from '../../assets/close.svg';

import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {

    return (
        <Modal
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >   
        <button 
            type='button' 
            onClick={onRequestClose}
            className='react-modal-close'
            >
            <img src={closeIcon} alt="Fechar modal"/>
        </button>
            <Container>
                <h1>Cadastrar transação</h1>
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='Preço'/>
                <input type="text" placeholder='Categoria'/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}

export default NewTransactionModal;