import ChallengeCard from '../../Components/Coffee Challenges/Challenge Card/ChallengeCard';
import './CoffeeChallenges.css';
import HeroSection from './../../Components/Hero Section/HeroSection';
import data from './Data/ChallengeCardData.json';
import { useState } from 'react';

function CoffeeChallenges() {

    const [cardsNo, setCardsNo] = useState(2);
    const handleLoadMore = () => {
        setCardsNo((prevCardsNo) => prevCardsNo + 2);
    };

    const handleLoadLess = () => {
        setCardsNo(2);
    };

    return (
        <div className='d-flex flex-column gap-5'>
            <HeroSection title={"Seasonal Coffee Challenges"} text={"Complete challenges, earn badges, and improve your coffee skills!"} />
            <div className='d-flex justify-content-center align-items-center gap-4 flex-wrap'>
                {
                    data.slice(0, cardsNo).map((data) => {
                        return (
                            <ChallengeCard key={data.id} title={data.title} description={data.description} level={data.level} points={data.points} requirements={data.requirements} time={data.time} />
                        )
                    })
                }
            </div>
            <div className='mb-5'>
                {
                    cardsNo < data.length ? (
                        <button className='see-more' onClick={handleLoadMore}>See More</button>
                    ) : (
                        <button className='see-more' onClick={handleLoadLess}>
                            See Less
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default CoffeeChallenges;