import { faChevronLeft, faClock, faGraduationCap, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './RecipeDetails.css';
import MightLike from "../MightLike/MightLike";
import recipesData from './RecipesDetails.json';

function RecipeDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [fav, setFav] = useState(false);

    const handleFavClick = () => {
        setFav(!fav);
    };

    const handleClick = () => {
        navigate(-1);
    };

    const recipe = recipesData.find((recipe) => recipe.id === id);

    if (!recipe) {
        return (
            <div className="container text-center mt-5">
                <h2>Recipe Not Found</h2>
                <button className="btn btn-primary mt-3" onClick={handleClick}>Back to Recipes</button>
            </div>
        );
    }

    return (
        <div className="recipes-page min-vh-100 d-flex flex-column justify-content-start align-items-start">
            {/* Back Button */}
            <div className="recipe-action mb-4">
                <button className="back-button" onClick={handleClick}>
                    <FontAwesomeIcon icon={faChevronLeft} size="xs" /> Back to Recipes
                </button>
            </div>

            {/* Recipe Content */}
            <div className="recipes-container w-100 p-4 p-md-5 d-flex flex-column justify-content-start align-items-start text-start">
                {/* Recipe Title and Favorite Icon */}
                <div className="w-100 d-flex justify-content-between align-items-center mb-4">
                    <h1 className="recipe-title">{recipe.title}</h1>
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={`heart-icon ${fav ? "fav-icon-active" : ""}`}
                        onClick={handleFavClick}
                    />
                </div>

                {/* Recipe Meta (Type, Time, Difficulty) */}
                <div className="recipe-meta w-100 d-flex justify-content-start align-items-center gap-3 gap-md-5 flex-wrap mb-4">
                    <p className="recipe-type">{recipe.type}</p>
                    <p className="recipe-time">
                        <FontAwesomeIcon icon={faClock} /> <span>{recipe.time}</span>
                    </p>
                    <p className="recipe-difficulty">
                        <FontAwesomeIcon icon={faGraduationCap} /> <span>{recipe.level}</span>
                    </p>
                </div>

                {/* Recipe Description */}
                <div className="recipe-desc mb-4">
                    <p>{recipe.desc}</p>
                </div>

                {/* Recipe Data (Ingredients and Instructions) */}
                <div className="recipe-data w-100 d-flex flex-column flex-md-row justify-content-start align-items-start gap-4 gap-md-5">
                    {/* Ingredients Card */}
                    <div className="ingredients-card">
                        <h3>Ingredients</h3>
                        <ul>
                            {
                                recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Instructions Card */}
                    <div className="instructions-card">
                        <h3>Instructions</h3>
                        <ol>
                            {
                                recipe.instructions.map((instruction, index) => (
                                    <li key={index}>{instruction}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
            <MightLike currentCategory={recipe.type} currentLevel={recipe.level} />
        </div>
    );
}

export default RecipeDetails;