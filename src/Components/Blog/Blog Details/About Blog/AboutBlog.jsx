import { faBookmark, faCalendar, faClock, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import './AboutBlog.css';

function AboutBlog({ avatar, author, date, time, }) {
    return (
        <div className="about-blog container">
            {/* Author Info Section */}
            <div className="author-info d-flex align-items-center gap-3">
                <img src={avatar ? avatar : "/placeholder.svg"} alt="Author" />
                <div>
                    <p className="author-name m-0">{author}</p>
                    <div className="meta-info d-flex gap-3">
                        <p className="text-muted d-flex align-items-center gap-2 m-0">
                            <FontAwesomeIcon icon={faCalendar} /> <span>{date}</span>
                        </p>
                        <p className="text-muted d-flex align-items-center gap-2 m-0">
                            <FontAwesomeIcon icon={faClock} /> <span>{time} read</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="about-btns">
                <button className="save-blog">
                    <FontAwesomeIcon icon={faBookmark} /> <span>Save</span>
                </button>
                <button className="share-blog">
                    <FontAwesomeIcon icon={faShare} /> <span>Share</span>
                </button>
            </div>
        </div>
    );
}

AboutBlog.propTypes = {
    avatar: PropTypes.string,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default AboutBlog;
