export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>
        Good:{good} Neutral: {neutral} Bad:{bad}
      </p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}% </p>
    </>
  );
};
