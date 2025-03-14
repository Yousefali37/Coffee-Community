import { faArrowRight, faClock, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BlogCard.css";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function BlogCard({ id, img, title, author, avatar, time, comments, }) {
    const navigate = useNavigate();
    
    return (
        <div className="blog-card cssanimation fadeIn">
            {/* Blog Image */}
            <div className="blog-img">
                <img src={img} alt="Blog Post" />
            </div>

            {/* Blog Content */}
            <div className="blog-content">

                {/* Blog Title */}
                <p className="text-start fs-5 fw-bold">{title}</p>

                {/* Blog Meta (Author & Read Time) */}
                <div className="blog-meta">
                    <div className="blog-author">
                        <img src={avatar} alt="Author" />
                        <span>{author}</span>
                    </div>
                    <span className="blog-time">
                        <FontAwesomeIcon icon={faClock} /> {time} read
                    </span>
                </div>

                {/* Divider */}
                <hr className="blog-divider" />

                {/* Blog Footer (Comments & Read More) */}
                <div className="blog-footer">
                    <p className="blog-comments m-0">
                        <FontAwesomeIcon icon={faComment} /> {comments} comments
                    </p>
                    <button className="read-more" onClick={() => {
                        navigate(`/blog/${id}`)
                    }}>
                        Read More <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}

BlogCard.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
};

export default BlogCard;