import { faBookmark, faClock, faComment, faFilter, faPlus, faRepeat, faThumbsUp, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CommunityCategories.css';
import PropTypes from "prop-types";

function CommunityCategories({ setCategory }) {
    return (
        <div className="community-categories">
            <h2 className="categories-title">Categories</h2>
            <nav className="categories-nav">
                <ul className="categories-list">
                    <li className="category-item" onClick={() => setCategory("allPosts")}>
                        <span className="category-icon"><FontAwesomeIcon icon={faRepeat} /></span> All Posts
                    </li>
                    <li className="category-item" onClick={() => setCategory("Brewing")}>
                        <span className="category-icon"><FontAwesomeIcon icon={faClock} /></span> Brewing Methods
                    </li>
                    <li className="category-item" onClick={() => setCategory("Coffee Beans")}>
                        <span className="category-icon"><FontAwesomeIcon icon={faBookmark} /></span> Coffee Beans
                    </li>
                    <li className="category-item" onClick={() => setCategory("Equipment")}>
                        <span className="category-icon"><FontAwesomeIcon icon={faFilter} /></span> Equipment
                    </li>
                </ul>
            </nav>
            <button className="create-post-button">
                <span className="button-icon"><FontAwesomeIcon icon={faPlus} /></span> Create New Post
            </button>
            <div className="community-stats">
                <p className="stats-title">Community Stats</p>
                <p className="stats-item"><span className="stats-icon"><FontAwesomeIcon icon={faUserGroup} /></span> 1,245 members</p>
                <p className="stats-item"><span className="stats-icon"><FontAwesomeIcon icon={faComment} /></span> 3,872 posts</p>
                <p className="stats-item"><span className="stats-icon"><FontAwesomeIcon icon={faThumbsUp} /></span> 12,954 reactions</p>
            </div>
        </div>
    );
}

CommunityCategories.propTypes = {
    setCategory: PropTypes.func.isRequired
};

export default CommunityCategories;
