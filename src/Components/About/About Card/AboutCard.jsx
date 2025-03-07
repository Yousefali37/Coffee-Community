import PropTypes from 'prop-types';
import './AboutCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutCard({ icon, title, description }) {
    return (
        <div className='about-card'>
            <div className='about-icon'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className='about-title'>
                <h5>{title}</h5>
            </div>
            <div className='about-description'>
                <p>{description}</p>
            </div>
        </div>
    );
}

AboutCard.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default AboutCard;
