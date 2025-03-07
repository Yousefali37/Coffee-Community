import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CommunityPost.css';
import { faClock, faComment, faHeart, faShareNodes, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'; // Remove `{}` around PropTypes
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CommunityPost({ id, username, time, type, title, desc, likes, comments, avatar }) {
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    const [fav, setFav] = useState(false);
    
    const handleLikeClick = () => {
        setLiked(!liked);
    };

    const handleFavClick = () => {
        setFav(!fav);
    };
    
    return (
        <div className="community-post-container">
            <div className="post-header">
                <div className="user-info">
                    <img src={avatar || '/placeholder.svg'} alt="User Avatar" className="user-avatar" />
                    <div className="user-details">
                        <p className="username">{username}</p>
                        <p className="post-time"><FontAwesomeIcon icon={faClock} /> <span>{time}</span>ago</p>
                    </div>
                </div>
                <div className="post-category">
                    <p className="recipe-type">{type}</p>
                </div>
            </div>
            <div className="post-content">
                <div className="post-title">
                    <h3>{title}</h3>
                </div>
                <hr className="post-divider" />
                <div className="post-description">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="post-actions">
                <div className="action-buttons" onClick={handleLikeClick}>
                    <button className={`like-action ${liked && "liked"}`}>
                        <FontAwesomeIcon icon={faThumbsUp} /> <span className="like-count">{likes}</span>
                    </button>
                    <button className="comment-action" onClick={() => {
                        navigate(`/community/${id}`)
                    }}>
                        <FontAwesomeIcon icon={faComment} /> <span className="comment-count">{comments}</span>
                    </button>
                </div>
                <div className="additional-actions">
                    <button className={`favorite-action ${fav && "fav"}`} onClick={handleFavClick}>
                        <FontAwesomeIcon icon={faHeart} className="favorite-icon" />
                    </button>
                    <button className="share-action">
                        <FontAwesomeIcon icon={faShareNodes} className="share-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

CommunityPost.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
};

export default CommunityPost;
