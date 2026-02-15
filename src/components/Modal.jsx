import { useState, useEffect } from 'react';

export const Modal = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    if (isOpen) setIsClosing(false);
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to finish (300ms matches CSS), then unmount
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleSoundClick = (sound) => {
    setActive(active === sound ? '' : sound);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`modal-overlay ${isClosing ? 'overlay-exit' : 'overlay-enter'}`}
      onClick={handleClose}
    >
      <div
        className={`modal glass-panel ${isClosing ? 'modal-exit' : 'modal-enter'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Find your zen</h2>
        </div>

        <div className="breathe-circle">
          <span>Breathe</span>
        </div>

        <div className="btns-row">
          <button className="glass-btn primary">Start</button>
          <button className="glass-btn">Reset</button>
        </div>

        <div className="btns-row">
          <button
            className={`glass-btn ${active === 'rain' ? 'active' : ''}`}
            onClick={() => handleSoundClick('rain')}
          >
            rain
          </button>
          <button
            className={`glass-btn ${active === 'ocean' ? 'active' : ''}`}
            onClick={() => handleSoundClick('ocean')}
          >
            ocean
          </button>
          <button
            className={`glass-btn ${active === 'forest' ? 'active' : ''}`}
            onClick={() => handleSoundClick('forest')}
          >
            forest
          </button>
        </div>

        <div className="timer">00:08</div>
      </div>
    </div>
  );
};
