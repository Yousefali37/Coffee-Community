import HeroSection from "../../Components/Hero Section/HeroSection";
import BlogCard from './../../Components/Blog/Blog Card/BlogCard';
import data from './Blog Data/BlogData.json';
import { useState } from "react";

function Blog() {
    const [category, setCategory] = useState("all posts");
    const [visibleCardsCount, setVisibleCardsCount] = useState(3);

    const filteredBlogs = category === "all posts"
        ? data
        : data.filter(blog => blog.category.toLowerCase() === category);

    const isMaxCardsVisible = filteredBlogs.length <= visibleCardsCount;

    const handleLoadMore = () => {
        setVisibleCardsCount(prevCount => prevCount + 3);
    };

    const handleLoadLess = () => {
        setVisibleCardsCount(3);
    };

    return (
        <div className="d-flex flex-column cssanimation fadeIn">
            {/* Hero Section */}
            <HeroSection
                page={"blog"}
                text={"Explore articles, guides, and stories from the world of coffee."}
                title={"Brew-of-Anarchy Blog"}
                setCategory={setCategory}
            />

            {/* Blog Cards Grid */}
            <div className="container mt-5">
                <div className="row justify-content-center g-4">
                    {filteredBlogs.slice(0, visibleCardsCount).map((blog) => (
                        <div key={blog.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center cssanimation fadeIn">
                            <BlogCard
                                id={blog.id}
                                author={blog.author}
                                title={blog.title}
                                comments={blog.comments}
                                time={blog.readTime}
                                img={blog.image}
                                avatar={blog.avatar}
                            />
                        </div>
                    ))}
                </div>
                <div className="m-4">
                    {!isMaxCardsVisible ? (
                        <button onClick={handleLoadMore} className="see-more">See More</button>
                    ) : (
                        <button onClick={handleLoadLess} className="see-more">See Less</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Blog;