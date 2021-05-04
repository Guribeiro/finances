import React, { useCallback, useState } from 'react';
import { GlobalStyle } from './styles/global';

import NewTransactionModal from './components/NewTransactionModal';

import Header from './components/Header';

import Dashboard from './pages/dashboard';

import {TransactionProvider} from './hooks/useTransactions';

const App: React.FC = () => {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, [])

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, [])
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
