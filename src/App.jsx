import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Recipes from './Pages/Recipes/Recipes';
import About from './Pages/About/About';
import RecipeDetails from './Components/Recipes/Recipe Details/RecipeDetails';
import AuthForm from './Components/Form/AuthForm';
import Community from './Pages/Community/Community';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/Blog/Blog Details/BlogDetails';
import Quiz from './Pages/Quiz/Quiz';
import PostDetails from './Components/Community/Community Posts/PostDetails/PostDetails';
// import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/Scroll To Top/ScrollToTop';
import Header from './Header/Header';
import NotFound from './Pages/Not Found/NotFound';
import Profile from './Pages/Profile/Profile';
import CoffeeChallenges from './Pages/Coffee Challenges/CoffeeChallenges';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<AuthForm />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-recipes" element={<Recipes />} />
        <Route path="/our-recipes/:id" element={<RecipeDetails />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:id" element={<PostDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path='/challenges' element={<CoffeeChallenges />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
