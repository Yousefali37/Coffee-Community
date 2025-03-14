import './ChallengeCard.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from 'prop-types';
import { useState } from 'react';

function ChallengeCard({ title, points, description, requirements, level, time }) {
    const [progress, setProgress] = useState("Join Challenge");
    const [popup, setPopup] = useState(false);

    const handleJoinChallenge = () => {
        setProgress("Not Started");
    };

    const handleStartChallenge = () => {
        setPopup(true);
    };

    const handleCancel = () => {
        setPopup(false);
        setProgress("Not Started");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPopup(false);
        setProgress("Completed");
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setPopup(false);
        }
    };

    return (
        <div className='challenge-card'>
            <div className='challenge-card__header'>
                <h3 className='challenge-card__title'>{title}</h3>
                <p className='challenge-card__points'>{points} Points</p>
            </div>
            <p className='challenge-card__description'>{description}</p>
            <div className='challenge-card__requirements'>
                <p className='challenge-card__requirements-title'>Requirements:</p>
                <ul className='challenge-card__requirements-list'>
                    {requirements.map((req, index) => (
                        <li key={index} className='challenge-card__requirement-item'>{req}</li>
                    ))}
                </ul>
            </div>
            <div className='challenge-card__footer'>
                <p className='challenge-card__level'>{level}</p>
                <p className='challenge-card__time'>
                    <AccessTimeIcon className='challenge-card__time-icon' /> Ends {time}
                </p>
                <p className={`challenge-card__status ${progress === "Completed" ? "challenge-card__status--completed" : ""}`}>
                    {progress === "Completed" ? (
                        <>
                            <CheckIcon className='challenge-card__time-icon' /> {progress}
                        </>
                    ) : (
                        progress
                    )}
                </p>
            </div>
            <div>
                {progress === "Join Challenge" && (
                    <button className='challenge-card__button' onClick={handleJoinChallenge}>
                        Join Challenge
                    </button>
                )}
                {progress === "Not Started" && (
                    <button className='challenge-card__button' onClick={handleStartChallenge}>
                        Start Challenge
                    </button>
                )}
                {progress === "In Progress" && (
                    <button className='challenge-card__button-disabled' disabled aria-disabled="true">
                        <CheckIcon className='challenge-card__time-icon' /> <span>Completed</span>
                    </button>
                )}
            </div>
            {popup && (
                <div className='popup' onClick={handleOverlayClick}>
                    <div className='popup__card'>
                        <h3 className='popup__title'>Submit Challenge</h3>
                        <p className='popup__description'>Share your experience and submit evidence of completing the challenge.</p>
                        <form className='popup__form' onSubmit={handleSubmit}>
                            <div className='popup__form-group'>
                                <label htmlFor="experience" className='popup__label'>Your Experience</label>
                                <textarea
                                    name="experience"
                                    id="experience"
                                    placeholder='Describe how you approached this challenge and what you learned...'
                                    className='popup__textarea'
                                    rows={3}
                                    required
                                />
                            </div>
                            <div className='popup__form-group'>
                                <label htmlFor="photo-link" className='popup__label'>Photo URL</label>
                                <input
                                    name="photo-link"
                                    id="photo-link"
                                    placeholder='Enter URL of your photo Evidence'
                                    className='popup__input'
                                    required
                                />
                            </div>
                            <div className='popup__actions'>
                                <button
                                    type='button'
                                    className='popup__button popup__button--cancel'
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    className='popup__button popup__button--submit'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

ChallengeCard.propTypes = {
    title: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
    level: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default ChallengeCard;