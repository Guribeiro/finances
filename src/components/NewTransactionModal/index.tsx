import React, { useState, useCallback, FormEvent, useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

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
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState<TransactionType>('deposit');

    const { createTransaction } = useTransactions()

    const handleSubmit = useCallback(async (event: FormEvent) => {
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit')
        
        onRequestClose();

    }, [title, amount, category, type])

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
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeIcon} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
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