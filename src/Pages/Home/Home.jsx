import HeroSection from './../../Components/Hero Section/HeroSection';
import FeaturedRecipes from './../../Components/Featured Recipes Section/FeaturedRecipes';
import RecipiesSection from '../../Components/Recipes/RecipesSection';

function Home() {
    return (
        <div>
            <HeroSection title={"Welcome to Brews of Anarchy"} text={"Where every cup tells a story, and every sip brings joy."} page={"home"} />
            <FeaturedRecipes />
            <HeroSection title={"About-Us"} text={"Your trusted companion in the journey of coffee exploration and mastery. We're passionate about bringing the art and science of coffee brewing to everyone."} page={"about"} />
            <RecipiesSection />
        </div>
    )
}

export default Home;