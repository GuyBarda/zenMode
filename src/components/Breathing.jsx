export const Breathing = ({ onClick }) => {
  return (
    <div className="breathing-container glass-panel" onClick={onClick}>
      <h2 className="glass-panel-title">BREATHING EXERCISE</h2>
      <p className="breathing-text">Inhale... Exhale...</p>
    </div>
  );
};
