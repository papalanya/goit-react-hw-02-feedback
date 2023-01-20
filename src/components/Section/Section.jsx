import PropTypes from 'prop-types';
import s from './Section.css';

export const Section = ({ children, title }) => (
    <section className={s.section}>
        <h2 className={s.title}>{title}</h2>
        {children}
    </section>
);

Section.protoTypes = {
    title: PropTypes.string.isRequired,
};