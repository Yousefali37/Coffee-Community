import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Recipes from './Pages/Recipes/Recipes';
import Header from './Components/Header/Header';
import { Fragment } from 'react';
import About from './Pages/About/About';
import RecipeDetails from './Components/Recipes/Recipe Details/RecipeDetails';
import AuthForm from './Components/Form/AuthForm';
import Community from './Pages/Community/Community';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/Blog/Blog Details/BlogDetails';
import Quiz from './Pages/Quiz/Quiz';
import PostDetails from './Components/Community/Community Posts/PostDetails/PostDetails';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Home />
        </>} />
        <Route path="/Auth" element={<AuthForm />} />
        <Route path="/about-us" element={<>
          <Header />
          <About />
        </>} />
        <Route path="/our-recipes" element={<>
          <Header />
          <Recipes />
        </>} />
        <Route path="/our-recipes/:id" element={<>
          <Header />
          <RecipeDetails />
        </>} />
        <Route path='/community' element={
          <>
            <Header />
            <Community />
          </>
        } />
        <Route path='/community/:id' element={<>
          <Header />
          <PostDetails />
        </>}
        />
        <Route path='/blog' element={
          <>
            <Header />
            <Blog />
          </>
        } />
        <Route path='/blog/:id' element={
          <>
            <Header />
            <BlogDetails />
          </>
        } />
        <Route path='/quiz' element={
          <>
            <Header />
            <Quiz />
          </>
        } />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App