import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BlogCommentSection.css";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


function BlogCommentSection({number}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Auth");
    };
    return (
        <div className="comment-section container">
            <div className="comment-header">
                <h2 className="comment-title">Comments ({number})</h2>
                <form className="comment-form">
                    <button className="comment-btn">Add Comment</button>
                </form>
            </div>

            <div className="sign-in-message">
                <p className="comment-icon">
                    <FontAwesomeIcon icon={faComment} className="sign-in-icon" />
                </p>
                <p className="sign-in-text">
                    <span> Sign in to join the conversation and share your thoughts</span>
                </p>
                <div>
                    <button className="sign-in-btn" onClick={handleClick}>Sign in</button>
                </div>
            </div>
        </div>
    );
}

BlogCommentSection.propTypes = {
    number: PropTypes.number.isRequired,
};

export default BlogCommentSection;