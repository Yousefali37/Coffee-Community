import { useNavigate, useParams } from "react-router-dom";
import data from '../../../../Pages/Community/Community Data/Community.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faClock, faHeart, faShareNodes, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CommentSection from "../../../Comment Section/CommentSection";

function PostDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [liked, setLiked] = useState(false);
    const [fav, setFav] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    const handleFavClick = () => {
        setFav(!fav);
    };

    const filter = data.filter((data) => data.id === parseInt(id));

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center pt-4">
            <div className="recipe-action mb-4 w-100 text-start">
                <button className="back-button" onClick={handleClick}>
                    <FontAwesomeIcon icon={faChevronLeft} size="xs" /> Back to Community
                </button>
            </div>

            <div className="w-100 bg-light p-4">
                {
                    filter.map((post) => {
                        return (
                            <div key={post.id}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="user-info mb-4">
                                        <img src={post.avatar || '/placeholder.svg'} alt="User Avatar" className="user-avatar" />
                                        <div className="user-details">
                                            <p className="username fw-bold fs-5">{post.username}</p>
                                            <p className="post-time"><FontAwesomeIcon icon={faClock} /> <span>{post.timestamp}</span>ago</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="recipe-type">{post.category}</p>
                                    </div>
                                </div>
                                <div className="post-title text-start">
                                    <h4 className="fw-bold">{post.title}</h4>
                                </div>
                                <hr className="post-divider" />
                                <div>
                                    {
                                        post.content.split('\n').map((line, index) => {
                                            return <p key={index} className="text-start">{line}</p>
                                        })
                                    }
                                </div>
                                <hr className="post-divider" />
                                <div className="post-actions">
                                    <div className="action-buttons" onClick={handleLikeClick}>
                                        <button className={`like-action ${liked && "liked"}`}>
                                            <FontAwesomeIcon icon={faThumbsUp} /> <span className="like-count">{post.likes}</span>
                                        </button>
                                    </div>
                                    <div className="additional-actions">
                                        <button className={`favorite-action ${fav && "fav"}`} onClick={handleFavClick}>
                                            <FontAwesomeIcon icon={faHeart} className="favorite-icon" />
                                        </button>
                                        <button className="share-action">
                                            <FontAwesomeIcon icon={faShareNodes} className="share-icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-100">
                <CommentSection />
            </div>
        </div>
    )
}

export default PostDetails;