import PropTypes from 'prop-types';
import styles from './Statistick.module.scss';

const StatisticksList = ({ label, percentage, background }) => {
  return (
    <li className={styles.Item} style={{ backgroundColor: `${background}` }}>
      <span className={styles.Label}>{label}</span>
      <span className={styles.Percentage}>{percentage}%</span>
    </li>
  );
};

StatisticksList.prototype = {
  lable: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
};

export default StatisticksList;
