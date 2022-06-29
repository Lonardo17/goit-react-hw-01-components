import PropTypes from 'prop-types';
import style from './friend-list.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={style.item} key={id}>
            <span className={isOnline ? style.online : style.offline}></span>
            <img className={style.avatar} src={avatar} alt={name} />
            <p className={style.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
    ).isRequired,
    name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;