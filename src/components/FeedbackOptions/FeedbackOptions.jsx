import shortid from 'shortid';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options?.map(feedback => {
        return (
          <button
            className={css.feedbackBtn}
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
