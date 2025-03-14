import styles from './HeroSection.module.css';
import PropTypes from 'prop-types';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../Search Bar/SearchBar';
import BlogFilter from '../Blog/Blog Filter Btns/BlogFilter';
import { useNavigate } from 'react-router-dom';

function HeroSection({ title, text, page, setCategory }) {

    const navigate = useNavigate();

    return (
        <div className={styles['hero-section']}>
            <div className={styles['hero-text']}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>

            {page === 'home' ? (
                <div className='d-flex flex-column align-items-center gap-5 cssanimation fadeIn'>
                    <div className={styles['hero-buttons']}>
                        <button className={styles['btn-primary']} onClick={() => {
                            navigate('/our-recipes');
                        }}>
                            Explore Recipes <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        <button className={styles['btn-secondary']} onClick={() => {
                            navigate('/community');
                        }}>Join Community</button>
                    </div>

                    <div className={styles['hero-image']}>
                        <img src="https://res.cloudinary.com/dtj4jwfs7/image/upload/v1741350387/logo_wm9x9r.png" alt="Coffee Brewing" />
                    </div>
                </div>
            ) : page === "community" ? (
                <SearchBar desc={"discussions"} />
            ) : page === "blog" && (
                <div className='d-flex justify-content-center align-items-center flex-column gap-4'>
                    <SearchBar desc={"Blogs"} />
                    <BlogFilter setFilter={setCategory} />
                </div>
            )}
        </div>
    );
}

HeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    setCategory: PropTypes.func,
};

export default HeroSection;