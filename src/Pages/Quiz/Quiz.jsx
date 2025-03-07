import { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import "./Quiz.css";
import RecipesCard from "../../Components/Recipes/Recipes Card/RecipesCard";
import Data from '../Recipes/Recipes Data/RecipesData.json';

function Quiz() {
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);
    const [filter, setFilter] = useState({
        type: '',
        level: '',
        time: ''
    });

    const nextStep = () => {
        if (selectedOption !== null) {
            setStep((prev) => prev + 1);
            setSelectedOption(null);
        }
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
        setSelectedOption(null);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        if (step === 1) {
            setFilter(prev => ({ ...prev, type: option }));
        } else if (step === 2) {
            setFilter(prev => ({ ...prev, level: option }));
        } else if (step === 3) {
            setFilter(prev => ({ ...prev, time: option }));
        }
    };
    

    const filteredRecipes = Data.filter((recipe) => {
        return (
            (filter.type === '' || recipe.type.toLowerCase() === filter.type.toLowerCase()) &&
            (filter.level === '' || recipe.level.toLowerCase() === filter.level.toLowerCase())) &&
            (filter.time === '' || recipe.timeinwords.toLowerCase() === filter.time.toLowerCase());
    });

    return (
        <div className="quiz-page">
            <h1>Coffee Brew Match</h1>
            <p className="quiz-description">
                Answer a few questions about your preferences, and we&apos;ll recommend the perfect coffee brewing method for you!
            </p>
            <div className="quiz-container">
                <div className="quiz-ques">
                    <h3>
                        {step === 1 && "What brewing methods are you interested in?"}
                        {step === 2 && "What is your experience level with coffee brewing?"}
                    </h3>
                    <ProgressBar now={(step / 3) * 100} className="progress-bar" />
                </div>
                <div className="quiz-btns">
                    {step === 1 && (
                        <div className="quiz-ans">
                            <button
                                className={selectedOption === 'Pour Over' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Pour Over')}
                            >
                                Pour Over (clean, bright flavors)
                            </button>
                            <button
                                className={selectedOption === 'Espresso' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Espresso')}
                            >
                                Espresso (rich, concentrated)
                            </button>
                            <button
                                className={selectedOption === 'French Press' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('French Press')}
                            >
                                French Press (full-bodied, robust)
                            </button>
                            <button
                                className={selectedOption === 'Cold Brew' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Cold Brew')}
                            >
                                Cold Brew (smooth, low acidity)
                            </button>
                            <button
                                className={selectedOption === 'AeroPress' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('AeroPress')}
                            >
                                AeroPress (versatile, balanced)
                            </button>
                            <button
                                className={selectedOption === 'Vietnamese Coffee' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Vietnamese Coffee')}
                            >
                                Vietnamese Coffee (strong, sweet)
                            </button>
                            <button
                                className={selectedOption === 'drip coffee' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('drip coffee')}
                            >
                                Drip Coffee (balanced, easy)
                            </button>
                            <button
                                className={selectedOption === 'Turkish Coffee' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Turkish Coffee')}
                            >
                                Turkish Coffee (rich, unfiltered)
                            </button>
                            <button
                                className={selectedOption === 'Moka Pot' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Moka Pot')}
                            >
                                Moka Pot (bold, intense)
                            </button>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="quiz-ans">
                            <button
                                className={selectedOption === 'Beginner' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Beginner')}
                            >
                                Beginner (keep it simple)
                            </button>
                            <button
                                className={selectedOption === 'Intermediate' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Intermediate')}
                            >
                                Intermediate (comfortable with basic techniques)
                            </button>
                            <button
                                className={selectedOption === 'Advanced' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Advanced')}
                            >
                                Advanced (ready for complex methods)
                            </button>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="quiz-ans">
                            <button
                                className={selectedOption === 'Short' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Short')}
                            >
                                Quick (under 5 minutes)
                            </button>
                            <button
                                className={selectedOption === 'Medium' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Medium')}
                            >
                                Medium (5-15 minutes)
                            </button>
                            <button
                                className={selectedOption === 'Long' ? "ans-selected" : ""}
                                onClick={() => handleOptionClick('Long')}
                            >
                                I don&apos;t mind waiting (15+ minutes)
                            </button>
                        </div>
                    )}
                    {step === 4 && (
                        <div className="quiz-results row">
                            {filteredRecipes.length > 0 ? (
                                filteredRecipes.map(recipe => (
                                    <div className="col-12" key={recipe.id}>
                                        <RecipesCard
                                            id={recipe.id}
                                            type={recipe.type}
                                            time={recipe.time}
                                            title={recipe.title}
                                            desc={recipe.desc}
                                            img={recipe.img}
                                            page={"quiz"}
                                        />
                                    </div>
                                ))
                            ) : (
                                <p>No recipes match your preferences. Try adjusting your selections!</p>
                            )}
                        </div>
                    )}
                </div>
                <div className="quiz-nav">
                    <button
                        className="prev-btn"
                        disabled={step === 1}
                        onClick={prevStep}
                    >
                        Previous
                    </button>
                    <button
                        className="next-btn"
                        disabled={selectedOption === null}
                        onClick={nextStep}
                    >
                        {step === 3 ? "Get Results" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Quiz;