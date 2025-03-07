import { useState } from "react";
import HeroSection from '../../Components/Hero Section/HeroSection';
import FilterBar from '../../Components/Search/FilterBar';
import RecipesCard from '../../Components/Recipes/Recipes Card/RecipesCard';
import recipesData from './Recipes Data/RecipesData.json';
import './Recipes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Recipes() {

    const navigate = useNavigate();

    const [cardsNo, setCardsNo] = useState(3);

    const handleLoadMoreClick = () => {
        setCardsNo((prevCardsNo) => prevCardsNo + 3);
    };

    const [filters, setFilters] = useState({
        method: "",
        level: "",
    });
    const [searchQuery, setSearchQuery] = useState("");

    const filteredRecipes = recipesData.filter((recipe) => {
        const matchesMethod = filters.method ? recipe.type.toLowerCase() === filters.method.toLowerCase() : true;
        const matchesLevel = filters.level ? recipe.level.toLowerCase() === filters.level.toLowerCase() : true;
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesMethod && matchesLevel && matchesSearch;
    });

    const handleFilterChange = (filterType, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="pb-5 recipes">
            <HeroSection
                title="Coffee Recipes"
                text="Discover and master various coffee brewing methods with our detailed recipes"
                page="recipes"
            />
            <FilterBar
                onFilterChange={handleFilterChange}
                onSearchChange={handleSearchChange}
            />
            <hr />
            <div className="row justify-content-center align-items-center gap-4 fade-in">
                {filteredRecipes.slice(0, cardsNo).map((recipe) => (
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
            <div className="mb-5">
                <button className='see-more mt-4' onClick={handleLoadMoreClick}>
                    See More
                </button>
            </div>
            <div className="floating-quiz" onClick={() => {
                navigate('/quiz')
            }}>
                <div className="quiz-icon"><FontAwesomeIcon icon={faQuestion} className="ques-icon" /></div>
                <div className="quiz-tooltip">
                    Not sure which coffee suits you best? <br />
                    <span>Take our quiz to help you decied</span>
                </div>
            </div>
        </div>
    );
}

export default Recipes;