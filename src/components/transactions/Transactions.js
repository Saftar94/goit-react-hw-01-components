import PropTypes from 'prop-types';
import TransactionList from './TransactionsList';
import styles from './Transactions.module.scss';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.TransactionHistory}>
      <thead>
        <tr className={styles.TableTitel}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.TransactionBody}>
        {items.map(elem => (
          <TransactionList
            key={elem.id}
            type={elem.type}
            amount={elem.amount}
            currency={elem.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
