import PropTypes from 'prop-types';
import s from './Statistics.css';

export const Statistics = ({ good, neutral, bad }) => (
    <>
        <p className={s.statText}>
            Good:
            <span className={s.statValue}>{good}</span>
        </p>

        <p className={s.statText}>
            Neutral:
            <span className={s.statValue}>{neutral}</span>
        </p>

        <p className={s.statText}>
            Bad:
            <span className={s.statValue}>{bad}</span>
        </p>
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};