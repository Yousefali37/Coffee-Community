import { useNavigate } from 'react-router-dom';
import './Achievements.css';
import data from './Achievements Data/AchievementsData.json';
import AchievementsCard from './Achievements Card/AchievementsCard';

function Achievements() {
    const navigate = useNavigate();

    return (
        <div className='achievements'>
            <div className='achievements__header'>
                <div className='achievements__header-content'>
                    <h2 className='achievements__title'>Earned Achievements</h2>
                    <p className='achievements__subtitle'>Your coffee journey milestones</p>
                </div>
                <button className='achievements__button' onClick={() => navigate('/challenges')}>
                    View Challenges
                </button>
            </div>
            <div className='row gap-4 justify-content-center align-items-center'>
                {data.map((item) => (
                    <AchievementsCard
                        key={item.id}
                        badge={item.badge}
                        description={item.desc}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Achievements;