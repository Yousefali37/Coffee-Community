import { useNavigate } from 'react-router-dom';
import recipesData from '../../Pages/Recipes/Recipes Data/RecipesData.json'
import RecipesCard from './Recipes Card/RecipesCard';
import './RecipesSection.css'
function RecipiesSection()
{
    const navigate = useNavigate();
    return (
        <div className='recipes-section'>
            <h1>Recipies</h1>
            <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                {
                    recipesData.slice(0,3).map((recipe) => {
                        return (
                            <RecipesCard 
                                key={recipe.id} 
                                type={recipe.type} 
                                time={recipe.time} 
                                title={recipe.title} 
                                desc={recipe.desc} 
                                img={recipe.img} 
                            />
                        )
                    })
                }
            </div>
            <div>
                <button className='see-more' onClick={() => {
                    navigate('/our-recipes')
                }}>
                    See More
                </button>
            </div>
        </div>
    )
}

export default RecipiesSection;