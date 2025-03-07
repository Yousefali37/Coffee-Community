import './AboutAuthor.css';
import PropTypes from 'prop-types';


function AboutAuthor({ avatar, author, authorBio}) {
    return (
        <div className="about-author container d-flex flex-column text-start gap-3">
            <h2>About the Author</h2>
            <div className='d-flex gap-3 align-items-center'>
                <img src={avatar ? avatar : "/placeholder.svg"} alt="Author" />
                <div>
                    <h3>{author}</h3>
                    <p className='m-0'>
                        {authorBio}
                    </p>
                </div>
            </div>
        </div>
    );
}

AboutAuthor.propTypes = {
    avatar: PropTypes.string,
    author: PropTypes.string.isRequired,
    authorBio: PropTypes.string.isRequired,
};


export default AboutAuthor;
