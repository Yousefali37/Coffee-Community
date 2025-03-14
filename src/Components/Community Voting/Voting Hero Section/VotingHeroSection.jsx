import './VotingHeroSection.css';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PropTypes from 'prop-types';

function VotingHeroSection({ title, description, time }) {
    return (
        <div className='voting-hero'>
            <div className='voting-hero__header'>
                <h1 className='voting-hero__title'>{title}</h1>
                <p className='voting-hero__description'>{description}</p>
            </div>
            <div className='voting-hero__timer'>
                <AccessTimeOutlinedIcon className='voting-hero__timer-icon' />
                <p className='voting-hero__timer-text'>{time} days remaining</p>
            </div>
        </div>
    );
}

VotingHeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default VotingHeroSection;