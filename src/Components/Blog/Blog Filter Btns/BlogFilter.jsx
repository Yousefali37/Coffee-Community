import { useState } from 'react';
import './BlogFilter.css';
import Data from './BlogFilterData.json';
import PropTypes from 'prop-types';

function BlogFilter({ setFilter }) {
    const [activeFilter, setActiveFilter] = useState(1);

    const handleClick = (id, title) => {
        setActiveFilter(id);
        setFilter(title.toLowerCase());
    };

    return (
        <div className='blog-filter w-75'>
            {Data.map((data) => (
                <button
                    key={data.id}
                    className={`blog-filter-btn ${activeFilter === data.id ? 'active-btn' : ''}`}
                    onClick={() => handleClick(data.id, data.title)}
                >
                    {data.title}
                </button>
            ))}
        </div>
    );
}

BlogFilter.propTypes = {
    setFilter: PropTypes.func.isRequired,
};

export default BlogFilter;