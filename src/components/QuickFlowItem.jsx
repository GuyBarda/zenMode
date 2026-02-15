export const QuickFlowItem = ({ text, icon, url }) => {
  return (
    <div className="quick-flow-item" onClick={() => window.open(url, '_blank')}>
      <div className="quick-flow-item-icon">{icon}</div>
      <p className="quick-flow-item-text">{text}</p>
    </div>
  );
};
