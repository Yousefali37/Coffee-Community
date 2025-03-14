import './AchievementsCard.css';
import PropTypes from 'prop-types';

function AchievementsCard({ badge, title, description }) {
    return (
        <div className="achievements-card col-md-3">
            <img src={badge} alt={title} className="achievements-card__image" />
            <h3 className="achievements-card__title">{title}</h3>
            <p className="achievements-card__description">{description}</p>
        </div>
    );
}

AchievementsCard.propTypes = {
    badge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default AchievementsCard;