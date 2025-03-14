import { Link } from 'react-router-dom';
import './ProfileHeroSection.css';

// ICONS 
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';


function ProfileHeroSection() {
    return (
        <div className='w-100 profile-page__profile'>
            <div className='profile-page__header'
                style={
                    {
                        backgroundImage: `url('https://res.cloudinary.com/dtj4jwfs7/image/upload/v1741350407/pixelcut-export_hvmhcx.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }
                }
            >
            </div>
            <span className='profile-page__avatar'>
                <img src="https://res.cloudinary.com/dtj4jwfs7/image/upload/v1741350407/pixelcut-export_hvmhcx.jpg" alt="" />
            </span>
            <div className='profile-page__info'>
                <div className='w-100 profile-page__user position-relative'>
                    <div className='profile-page__actions'>
                        <div className='profile-page__user-details'>
                            <div className='w-100 d-flex justify-content-between align-items-center gap-2'>
                                <h1 className='profile-page__name'>yousef ali</h1>
                                <Link className='profile-page__edit-profile m-0'>Edit Profile</Link>
                            </div>
                            <p className='profile-page__username'>@yousef_ali38</p>
                        </div>
                    </div>
                </div>
                <div className='profile-page__details'>
                    <div className='profile-page__bio'>
                        <p className='profile-page__bio-text text-start'>MANC BORN AND BRED</p>
                        <div className='profile-page__metadata'>
                            <p className='profile-page__location'><ShareLocationIcon fontSize='small' />Luxor, Egypt</p>
                            <p className='profile-page__joined-date'><CalendarTodayOutlinedIcon fontSize='' />Joined January 2023</p>
                        </div>
                    </div>
                    <div className='profile-page__social-links'>
                        <Link className='profile-page__social-link'>
                            <span className='profile-page__social-icon'><TwitterIcon /></span>
                            <span className='profile-page__social-handle'>@CoffeeEnthusiast</span>
                        </Link>
                        <Link className='profile-page__social-link'>
                            <span className='profile-page__social-icon'><InstagramIcon /></span>
                            <span className='profile-page__social-handle'>@coffee_enthusiast</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeroSection;