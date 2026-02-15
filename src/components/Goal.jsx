import { Clover, Stars } from '../../public';

export const Goal = () => {
  return (
    <div className="goal-container glass-panel">
      <h2 className="glass-panel-title">TODAY'S GOAL</h2>
      <div className="goal-text-container">
        <Stars className="icon" />
        <p className="goal-text">Set a calm, focused pace.</p>
        <Clover className="icon clover-icon" />
      </div>
    </div>
  );
};
