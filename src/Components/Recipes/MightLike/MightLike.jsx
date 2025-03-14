import './MightLike.css';
import Data from '../../../Pages/Recipes/Recipes Data/RecipesData.json';
import RecipesCard from './../Recipes Card/RecipesCard';
import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';

function MightLike({ currentCategory, currentLevel }) {
    const { id } = useParams();

    const filteredRecipes = Data.filter((recipe) => 
        recipe.type === currentCategory || currentLevel === recipe.level && recipe.id !== id
    ).slice(0, 3);

    return (
        <div className='might-like'>
            <h4 className='px-4'>You Might Also Like</h4>
            <div className='row justify-content-start align-items-center px-5 gap-4'>
                {filteredRecipes.map((recipe) => (
                    <RecipesCard
                        key={recipe.id}
                        id={recipe.id}
                        type={recipe.type}
                        time={recipe.time}
                        title={recipe.title}
                        desc={recipe.desc}
                        img={recipe.img}
                    />
                ))}
            </div>
        </div>
    );
}

MightLike.propTypes = {
    currentCategory: PropTypes.string.isRequired,
    currentLevel: PropTypes.string.isRequired,
};

export default MightLike;