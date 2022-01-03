import styles from './Profile.module.scss';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <div className={styles.Profile}>
        <img src={avatar} alt="User avatar" class={styles.avatar} />
        <p class={styles.name}>{username}</p>
        <p class={styles.tag}>@{tag}</p>
        <p class={styles.location}>{location}</p>
      </div>
      <ul className={styles.Stats}>
        <li className={styles.Item}>
          <span className={styles.Label}>Followers</span>
          <span className={styles.Quantity}>{stats.followers}</span>
        </li>
        <li className={styles.Item}>
          <span className={styles.Label}>Views</span>
          <span className={styles.Quantity}>{stats.views}</span>
        </li>
        <li className={styles.Item}>
          <span className={styles.Label}>Likes</span>
          <span className={styles.Quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
