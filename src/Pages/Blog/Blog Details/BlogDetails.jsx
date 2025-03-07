import { useParams } from "react-router-dom";
import AboutAuthor from "../../../Components/Blog/Blog Details/About Author/AboutAuthor";
import AboutBlog from "../../../Components/Blog/Blog Details/About Blog/AboutBlog";
import BlogContent from "../../../Components/Blog/Blog Details/Blog Content/BlogContent";
import BlogHeroSection from "../../../Components/Blog/Blog Details/Blog Hero Section/BlogHeroSection";
import BlogCommentSection from "../../../Components/Blog/Blog Details/Comments Section/BlogCommentSection";
import data from '../Blog Data/BlogData.json';

function BlogDetails() {
    const { id } = useParams();
    const blogPost = data.find((post) => post.id === parseInt(id));

    if (!blogPost) {
        return <div>Blog post not found</div>;
    }

    const { title, author, avatar, date, readTime, content, authorBio, comments } = blogPost;

    return (
        <div className="row gap-5">
            <BlogHeroSection title={title} />
            <div className="container">
                <AboutBlog author={author} avatar={avatar} date={date} time={readTime} />
                <BlogContent
                    title={title} 
                    content={content.split('\n').map((line, index) => (
                        <p key={index} className="text-start">{line}</p>
                    ))}
                />
                <AboutAuthor author={author} authorBio={authorBio} avatar={avatar} />
                <BlogCommentSection number={comments} />
            </div>
        </div>
    );
}

export default BlogDetails;