import './WebsiteCard.css';
import PropTypes from 'prop-types';

function WebsiteCard({ number, desc}) {
    return (
        <div className="website-card">
            <h1>{number}</h1>
            <p>{desc}</p>
        </div>
    )
}

WebsiteCard.propTypes = {
    number: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
}

export default WebsiteCard;