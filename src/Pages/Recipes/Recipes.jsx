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

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(3);

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

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const handleFilterChange = (filterType, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
        setCurrentPage(1);
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredRecipes.length / recipesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="pb-5 recipes cssanimation fadeIn">
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
            <div className="row justify-content-center align-items-center gap-4 cssanimation fadeIn">
                {currentRecipes.map((recipe) => (
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
            <div className="pagination-controls mb-5">
                <button 
                    className='pagination-button' 
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="pagination-page">Page {currentPage}</span>
                <button 
                    className='pagination-button' 
                    onClick={handleNextPage} 
                    disabled={currentPage === Math.ceil(filteredRecipes.length / recipesPerPage)}
                >
                    Next
                </button>
            </div>
            <div className="floating-quiz" onClick={() => {
                navigate('/quiz')
            }}>
                <div className="quiz-icon"><FontAwesomeIcon icon={faQuestion} className="ques-icon" /></div>
                <div className="quiz-tooltip">
                    Not sure which coffee suits you best? <br />
                    <span>Take our quiz to help you decide</span>
                </div>
            </div>
        </div>
    );
}

export default Recipes;