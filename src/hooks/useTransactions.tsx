import { createContext, ReactNode, useEffect, useState, useCallback, useContext } from 'react';
import { api } from '../service/api';

interface TransactionProviderProps {
    children: ReactNode;
}

interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}


type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContext {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContext>({} as TransactionContext);



const TransactionProvider: React.FC<TransactionProviderProps> = ({ children }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    const createTransaction = useCallback(async (transactionInput:TransactionInput) =>{
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })

        const {transaction} = response.data;

        setTransactions(prev => [...prev, transaction]);
    }, [])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])
    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}


export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}


export { TransactionProvider };