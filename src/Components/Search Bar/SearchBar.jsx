import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function SearchBar({ desc }) {
    return (
        <div className='community-search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
            <input type="text" placeholder={`Search ${desc}...`} />
            <FontAwesomeIcon icon={faFilter} className="filter-icon" />
        </div>
    )
}

SearchBar.propTypes = {
    desc: PropTypes.string.isRequired,
};

export default SearchBar;