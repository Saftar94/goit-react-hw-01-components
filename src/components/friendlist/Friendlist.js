import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './Friendlist.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.FriendList}>
      {friends.map(elem => (
        <FriendListItem
          key={elem.id}
          avatar={elem.avatar}
          name={elem.name}
          isOnline={elem.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
