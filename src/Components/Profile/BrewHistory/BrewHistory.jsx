import { Link } from 'react-router-dom';
import { Coffee } from '@mui/icons-material'; // Updated import
import './BrewHistory.css';

function BrewHistory() {
    return (
        <div className='brew-history-container cssanimation fadeIn'>
            <div className='brew-history-header'>
                <div className='brew-history-title'>
                    <h2>My Brew History</h2>
                    <p>Track your coffee brewing journey</p>
                </div>
                <button className='log-brew-button'>
                    Log New Brew
                </button>
            </div>
            <div className='brew-history-content'>
                <div className='brew-history-empty-state'>
                    <Coffee className='brew-icon' />
                    <p>Your brewing history will appear here once you start logging your brews.</p>
                    <Link className='browse-recipes-link' to='/our-recipes'>
                        Browse Recipes
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BrewHistory;