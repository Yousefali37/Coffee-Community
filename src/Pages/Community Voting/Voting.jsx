import './Voting.css';
import HeroSection from './../../Components/Hero Section/HeroSection';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import { useState } from 'react';
import RecipeVoting from './../../Components/Community Voting/RecipeVoting/RecipeVoting';
import PictureVoting from './../../Components/Community Voting/PictureVoting/PictureVoting';
import ShopVoting from '../../Components/Community Voting/ShopVoting/ShopVoting';

function Voting() {

    const [active, setActive] = useState("recipe");

    return (
        <div className='d-flex flex-column gap-5'>
            <HeroSection text={"Vote for your favorites and help determine our monthly highlights!"} title={"Community Voting"} />
            <div className='profile-navbar w-75 d-flex justify-content-between justify-content-sm-center align-items-center flex-wrap align-self-center'>
                <button className={`${active === "recipe" && "active"}`} onClick={() => {
                    setActive("recipe");
                }}>
                    <CoffeeIcon fontSize='small' /> Recipe
                </button>
                <button className={`${active === "coffee picture" && "active"}`} onClick={() => {
                    setActive("coffee picture");
                }}>
                    <FavoriteBorderOutlinedIcon fontSize='small' /> Coffe Picture
                </button>
                <button className={`${active === "coffee shop" && "active"}`} onClick={() => {
                    setActive("coffee shop");
                }}>
                    <StoreOutlinedIcon fontSize='small' /> Coffee Shop
                </button>
            </div>
            <div className='w-100 p-4 cssanimation fadeIn'>
                {active === "recipe" &&
                    <div className='cssanimation fadeIn'>
                        <RecipeVoting />
                    </div>
                }
                {active === "coffee picture" &&
                    <div className='cssanimation fadeIn'>
                        <PictureVoting />
                    </div>
                }
                {active === "coffee shop" &&
                    <div className='cssanimation fadeIn'>
                        <ShopVoting />
                    </div>
                }
            </div>
        </div>
    )
}

export default Voting;