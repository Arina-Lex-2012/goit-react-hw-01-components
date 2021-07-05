import PropTypes from "prop-types";
import css from "./Profile.module.css";

export const Profile = ({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  // const { name, tag, location, avatar, followers, views, likes } = user;
  return (
    <div className={css.profile}>
      <div class="description">
        <img src={avatar} alt={tag} class="avatar" width="100" />
        <p className={css.name}>{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
