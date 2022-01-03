import styles from './Statistick.module.scss';
import PropTypes from 'prop-types';
import StatisticksList from './StatisticksList';

const Statisticks = ({ stats }) => {
  return (
    <section className={styles.Statistic}>
      <ul className={styles.StatList}>
        {stats.map(elem => (
          <StatisticksList
            key={elem.id}
            label={elem.label}
            percentage={elem.percentage}
            background={elem.background}
          />
        ))}
      </ul>
    </section>
  );
};

Statisticks.prototype = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Statisticks;
