import VotingCard from '../Voting Card/VotingCard';
import VotingHeroSection from '../Voting Hero Section/VotingHeroSection';
import './RecipeVoting.css';
import data from '../../../Pages/Recipes/Recipes Data/RecipesData.json'

function RecipeVoting() {

    const filterData = data.filter((item) => {
        return item.recipeofmonth === true
    })

    return (
        <div className='row justify-content-center align-items-center gap-4'>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='col-10'>
                    <VotingHeroSection title={"Recipe of the Week"} description={"Vote for your favorite Recipe this Week!"} time={"5"} />
                </div>
            </div>
            <div className='container row gap-3 justify-content-center align-items-center'>
                {
                    filterData.map((item) => {
                        return (
                            <div className='col-md-3 col-sm-12' key={item.id}>
                                <VotingCard id={item.id} img={item.img} desc={item.desc} title={item.title} />
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button className='see-more'>
                    Submit Vote
                </button>
            </div>
        </div>
    )
}

export default RecipeVoting;