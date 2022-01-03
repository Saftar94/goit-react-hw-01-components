import PropTypes from 'prop-types';
import styles from './Transactions.module.scss';

const TransactionList = ({ type, amount, currency }) => {
  return (
    <tr className={styles.Line}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionList.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionList;
