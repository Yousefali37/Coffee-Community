import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import './BlogHeroSection.css';

function BlogHeroSection({ title }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <div className="blog-hero-section">
            <div className="blog-action mb-4">
                <button className="back-button" onClick={handleClick}>
                    <FontAwesomeIcon icon={faChevronLeft} size="xs" /> Back to Blogs
                </button>
                <h1>
                    {title ? title : "No title"}
                </h1>
            </div>
        </div>
    );
}

BlogHeroSection.propTypes = {
    title: PropTypes.string.isRequired,
};

export default BlogHeroSection;
