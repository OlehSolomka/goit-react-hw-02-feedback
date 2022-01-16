const Statistic = ({ good, neutral, bad, total, positivePersentage }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      {total > 0 && <p>Positive Feedback: {positivePersentage.toFixed()} %</p>}
    </div>
  );
};

export default Statistic;
