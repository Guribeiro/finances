import React, { useState, useCallback, FormEvent } from 'react';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';

import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

type TransactionType = 'deposit' | 'withdraw'

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [transactionType, setTransactiontype] = useState<TransactionType>();

    const handleSubmit = useCallback((event:FormEvent) =>{
        event.preventDefault()

        console.log({
            title,
            price,
            category,
            transactionType
        })

    }, [ title,
        price,
        category,
        transactionType])
 
    return (
        <Modal
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
        >
            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeIcon} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleSubmit}>
                <h1>Cadastrar transação</h1>
                <input 
                    type="text" 
                    placeholder='Título'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    />
                <input 
                    type="text" 
                    placeholder='Preço'
                    value={price}
                    onChange={event => setPrice(Number(event.target.value))}
                    />
                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => setTransactiontype('deposit')}
                        isActive={transactionType === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeIcon} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type='button'
                        onClick={() => setTransactiontype('withdraw')}
                        isActive={transactionType === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeIcon} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input 
                    type="text" 
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}

export default NewTransactionModal;