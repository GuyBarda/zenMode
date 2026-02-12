export const Launch = (props) => {
  const { text, icon, url } = props;
  return (
    <div className="launch" onClick={() => window.open(url, '_blank')}>
      <div className="launch-icon">{icon}</div>
      <p className="launch-text">{text}</p>
    </div>
  );
};
