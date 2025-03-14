import { faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RecipesCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { useState } from "react";

function RecipesCard({ id, type, time, img, title, desc, page }) {
    const [fav, setFav] = useState(false);
    const quiz = page === 'quiz';

    const handleClick = () => {
        setFav(!fav);
    };

    return (
        <div className={`recipe-card ${quiz ? 'col-12' : 'col-lg-3 col-md-5 col-sm-7 col-10'} cssanimation fadeIn`}>
            <div className="recipe-meta">
                <p className="recipe-type">{type}</p>
                <div className="recipe-time">
                    <p>
                        <FontAwesomeIcon icon={faClock} /> <span>{time}</span>
                    </p>
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={`heart-icon ${fav ? "fav-icon-active" : ""}`}
                        onClick={handleClick}
                    />
                </div>
            </div>
            <div className="recipe-image">
                <img src={img} alt="coffee img" />
            </div>
            <div className="recipe-title">
                <h4>{title}</h4>
            </div>
            <div className="recipe-description">
                <p>{desc}</p>
            </div>
            <div className="recipe-action">
                <p>
                    <Link to={`/our-recipes/${id}`} className="learn-more">
                        View Recipe <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </Link>
                </p>
            </div>
        </div>
    );
}

// Define prop types
RecipesCard.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    page: PropTypes.string,
};

// Define default props
RecipesCard.defaultProps = {
    type: "Coffee",
    time: "5min",
    title: "Classic Coffee",
    desc: "A delicious cup of coffee",
};

export default RecipesCard;