import ProfileHeroSection from '../../Components/Profile/Profile Hero Section/ProfileHeroSection';
import './Profile.css';


// ICONS
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useState } from 'react';
import FavoriteSection from '../../Components/Profile/Favorite Section/FavoriteSection';
import BrewHistory from '../../Components/Profile/BrewHistory/BrewHistory';


function Profile() {

    const [active, setActive] = useState("favorites");

    return (
        <div className='profile-page container d-flex flex-column justify-content-center align-items-center gap-5 cssanimation fadeIn'>
            <ProfileHeroSection />
            <div className='profile-navbar w-100 d-flex justify-content-between align-items-center flex-wrap'>
                <button className={`${active === "favorites" && "active"}`} onClick={() => {
                    setActive("favorites");
                }}>
                    <BookmarkBorderIcon fontSize='small' /> Favorites
                </button>
                <button className={`${active === "brew" && "active"}`} onClick={() => {
                    setActive("brew");
                }}>
                    <CoffeeIcon fontSize='small' /> Brew History
                </button>
                <button className={`${active === "achievements" && "active"}`} onClick={() => {
                    setActive("achievements");
                }}>
                    <EmojiEventsIcon fontSize='small' /> Achievements
                </button>
            </div>
            <div className='w-100 p-4 cssanimation fadeIn'>
                {active === "favorites" &&
                    <FavoriteSection />
                }
                {active === "brew" &&
                    <div className='cssanimation fadeIn'>
                        <BrewHistory />
                    </div>
                }
                {active === "achievements" &&
                    <div className='cssanimation fadeIn'>
                        Achievements
                    </div>
                }
            </div>
        </div>
    );
}

export default Profile;