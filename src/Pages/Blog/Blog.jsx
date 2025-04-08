import { Pagination } from "@mui/material";
import HeroSection from "../../Components/Hero Section/HeroSection";
import BlogCard from './../../Components/Blog/Blog Card/BlogCard';
import data from './Blog Data/BlogData.json';
import { useState } from "react";

function Blog() {
    const [category, setCategory] = useState("all posts");
    const [blogsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredBlogs = category === "all posts"
        ? data
        : data.filter(blog => blog.category.toLowerCase() === category);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

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
                    {currentBlogs.map((blog) => (
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
                <div className="d-flex justify-content-center align-items-center m-5">
                    <Pagination
                        count={Math.ceil(filteredBlogs.length / blogsPerPage)}
                        page={currentPage}
                        onChange={(event, value) => setCurrentPage(value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Blog;