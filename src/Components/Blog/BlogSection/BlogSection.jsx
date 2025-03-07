import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BlogSection.css';
import { faCalendar, faClock, faComment } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function BlogSection() {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center gap-4 gap-md-0 p-3 p-md-4">
            {/* Blog Image */}
            <div className="blog-section-img col-12 col-md-5">
                <img src="/BlogSection.jpeg" alt="Blog" className="img-fluid rounded-3" />
            </div>

            {/* Blog Content */}
            <div className="blog-content d-flex flex-column align-items-start text-start col-12 col-md-6">
                {/* Recipe Type */}
                <p className="recipe-type mb-3">Brewing Methods</p>

                {/* Blog Title */}
                <h2 className="blog-title mb-3">The Science Behind the Perfect Extraction</h2>

                {/* Blog Description */}
                <p className="blog-desc mb-4">Understanding the chemistry of coffee extraction and how it affects flavor profiles in your daily brew.</p>

                {/* Blog Metadata */}
                <div className="blog-meta d-flex flex-wrap justify-content-start align-items-center gap-3 gap-md-4 mb-4">
                    <div>
                        <p className="m-0"><FontAwesomeIcon icon={faCalendar} className='px-1' /> <span>May 15, 2023</span></p>
                    </div>
                    <div>
                        <p className="m-0"><FontAwesomeIcon icon={faClock} className='px-1' /> <span>7 min read</span></p>
                    </div>
                    <div>
                        <p className="m-0"><FontAwesomeIcon icon={faComment} className='px-1' /> <span>12 comments</span></p>
                    </div>
                </div>

                {/* Author Info */}
                <div className="d-flex justify-content-start align-items-center gap-2 mb-4">
                    <img src="/user.png" width={30} height={30} alt="Author" className="rounded-circle" />
                    <p className="m-0">Alex Johnson</p>
                </div>

                {/* Read Article Button */}
                <button className="btn read-article" onClick={() => {
                    navigate('/blog-details');
                }}>Read Article</button>
            </div>
        </div>
    );
}

export default BlogSection;