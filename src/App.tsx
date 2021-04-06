import React, { useCallback, useState } from 'react';
import { GlobalStyle } from './styles/global';

import Modal from 'react-modal';

import Header from './components/header';

import Dashboard from './pages/dashboard';

const App: React.FC = () => {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, [])

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, [])
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h1>Modal is open</h1>
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
