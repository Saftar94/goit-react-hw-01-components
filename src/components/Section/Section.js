import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ children }) => {
  return (
    <section className={styles.Section}>
      <div className={styles.Container}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
