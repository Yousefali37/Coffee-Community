import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import './BlogHeroSection.css';

function BlogHeroSection({ title, img }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <div
            className="blog-hero-section"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${img})`
            }}
        >
            <div className="blog-action mb-4">
                <button className="back-button" onClick={handleClick}>
                    <FontAwesomeIcon icon={faChevronLeft} size="xs" /> Go Back
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
    img: PropTypes.string.isRequired,
};

export default BlogHeroSection;