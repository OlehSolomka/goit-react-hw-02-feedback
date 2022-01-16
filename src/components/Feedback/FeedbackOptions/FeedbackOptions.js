const FeedbackOptions = ({ onGoodIncr, onBadIncr, onNeutralIncr }) => {
  return (
    <div>
      <button type="button" onClick={onGoodIncr}>
        Good
      </button>
      <button type="button" onClick={onBadIncr}>
        Neutral
      </button>
      <button type="button" onClick={onNeutralIncr}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
