import { Link } from 'react-router-dom';
import RecipesCard from '../../Recipes/Recipes Card/RecipesCard';
import './FavoriteSection.css';
import data from '../../../Pages/Profile/Profile Data/Favorite.json';

function FavoriteSection() {
    return (
        <div className='favorite-Section w-100 cssanimation fadeIn'>
            <div className='w-100 d-flex flex-wrap justify-content-between align-items-center'>
                <h3>
                    My Favorite Items
                </h3>
                <Link className='browse-all-recipes' to={'/our-recipes'}>
                    Browse All Recipes
                </Link>
            </div>
            <div className='row justify-content-between align-items-center gap-3 p-4 cssanimation fadeIn'>
                {
                    data.map((item) => {
                        return (
                            <RecipesCard
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                time={item.time}
                                type={item.type}
                                title={item.title}
                                desc={item.desc}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FavoriteSection;