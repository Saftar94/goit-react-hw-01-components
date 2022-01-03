import PropTypes from 'prop-types';
import styles from './Friendlist.module.scss';

const FriendListItem = ({ avatar, name, isOnline }) => {
  let statuscolor;
  if (isOnline) {
    statuscolor = 'rgb(5 243 5)';
  } else {
    statuscolor = 'rgb(229 27 7)';
  }
  return (
    <li className={styles.Item}>
      <span
        className={styles.Status}
        style={{ backgroundColor: `${statuscolor}` }}
      >
        {isOnline}
      </span>
      <img
        className={styles.Avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.Name}>{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};

export default FriendListItem;
