import './CommunityFilterBar.css';
import { faArrowTrendUp, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CommunityFilterBar() {
    return (
        <div className="community-filter-bar">
            <div className="filter-header">
                <div className="filter-title">
                    <h2>All Discussions</h2>
                </div>
                <div className="filter-options">
                    <button className="filter-option latest">
                        Latest
                    </button>
                    <button className="filter-option trending">
                        <FontAwesomeIcon icon={faArrowTrendUp} /> <span>Trending</span>
                    </button>
                    <button className="filter-option most-discussed">
                        <FontAwesomeIcon icon={faComment} /> <span>Most Discussed</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CommunityFilterBar;