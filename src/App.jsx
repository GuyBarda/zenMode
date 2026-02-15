import { useState } from 'react';
import {
  Header,
  QuickFlow,
  Goal,
  Wisdom,
  Breathing,
  Modal,
} from './components';

function App() {
  const [isBreathingModalOpen, setIsBreathingModalOpen] = useState(false);
  const handleBreathingClick = () => {
    setIsBreathingModalOpen(true);
  };

  return (
    <>
      <Header />
      <main className="main-content">
        <Goal />
        <Wisdom />
        <QuickFlow />
        <Breathing onClick={handleBreathingClick} />
      </main>
      <Modal
        isOpen={isBreathingModalOpen}
        onClose={() => setIsBreathingModalOpen(false)}
      />
    </>
  );
}

export default App;
