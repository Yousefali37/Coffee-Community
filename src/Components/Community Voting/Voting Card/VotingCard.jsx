import './VotingCard.css';
import PropTypes from 'prop-types';

function VotingCard({ id, img, title, desc, votesNo }) {
    return (
        <div className='voting-card'>
            <div className='voting-card__image-container'>
                <img src={img} alt={title} className='voting-card__image' />
            </div>
            <div className='voting-card__content'>
                <h2 className='voting-card__title'>{title || "Title"}</h2>
                <p className='voting-card__description'>{desc || "description"}</p>
            </div>
            <div className='voting-card__footer'>
                <p className='voting-card__votes'>{votesNo || "0"} votes</p>
            </div>
            <div className='voting-card__selection'>
                <input type='radio' name='selection' id={`selection-${id}`} className='voting-card__radio' />
                <label htmlFor={`selection-${id}`} className='voting-card__radio-label'>Select to vote</label>
            </div>
        </div>
    );
}

VotingCard.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    votesNo: PropTypes.number.isRequired,
};

export default VotingCard;