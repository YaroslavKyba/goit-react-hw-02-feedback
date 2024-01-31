import shortid from 'shortid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options?.map(feedback => {
        return (
          <button
            key={shortid.generate()}
            onClick={() => onLeaveFeedback(feedback)}
          >
            {feedback.toUpperCase()}
          </button>
        );
      })}
    </>
  );
};
