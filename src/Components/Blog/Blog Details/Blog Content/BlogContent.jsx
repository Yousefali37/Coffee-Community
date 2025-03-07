import './BlogContent.css';
import PropTypes from 'prop-types';
function BlogContent({title, content}) {
    return (
        <div className="blog-details-content container">
            <h2>{title ? title : "No title"}</h2>
            <p>
                {content ? content : "No content to view !"}
            </p>
        </div>
    );
}

BlogContent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default BlogContent;
