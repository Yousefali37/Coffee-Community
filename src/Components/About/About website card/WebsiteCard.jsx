import './WebsiteCard.css';
import PropTypes from 'prop-types';

function WebsiteCard({ number, desc }) {
    return (
        <div className="col-md-3 col-sm-12 website-card cssanimation fadeIn">
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