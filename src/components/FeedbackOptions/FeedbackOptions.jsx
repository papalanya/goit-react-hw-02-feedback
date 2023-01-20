import PropTypes from 'prop-types';
import s from './FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
    {Object.keys(options).map(el => (
        <button
            onClick={onLeaveFeedback}
            key={el}
            value={el}
            className={s.filterBtn}
            type='button'
        >
            {el.toUpperCase()}
        </button>
    ))}
    </>
);

FeedbackOptions.protoTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
};