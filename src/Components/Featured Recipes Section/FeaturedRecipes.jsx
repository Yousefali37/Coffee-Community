import styles from './FeaturedRecipes.module.css';
import data from '../../Pages/Recipes/Recipes Data/RecipesData.json';
import RecipesCard from './../Recipes/Recipes Card/RecipesCard';

function FeaturedRecipes() {

    const filteredRecipes = data.filter((recipie) => {
        return (
            recipie.featured === true
        )
    })

    return (
        <div className={`${styles['featuredSection']} cssanimation fadeIn`}>
            <div className={`${styles['featuredSectionTitle']}`}>
                <h1>Featured Recipes</h1>
            </div>
            <div className='container d-flex justify-content-around align-items-center flex-wrap gap-2 cssanimation fadeIn'>
                {
                    filteredRecipes.map((recipe) => {
                        return (
                            <RecipesCard
                                key={recipe.id}
                                id={recipe.id}
                                type={recipe.type}
                                time={recipe.time}
                                title={recipe.title}
                                desc={recipe.desc}
                                img={recipe.img}
                            />)
                    })
                }
            </div>
        </div>
    )
}


export default FeaturedRecipes;