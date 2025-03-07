import { useState } from "react";
import "./CommentSection.css"; 

function CommunitySection() {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() === "") return;
        setComments([...comments, comment]);
        setComment("");
    };

    return (
        <div className="community-section">
            <div className="community-header">
                <p>Comments ({comments.length})</p>
            </div>
            <div>
                <form className="comment-form" onSubmit={handleCommentSubmit}>
                    <textarea
                        name="comment"
                        id="comment"
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="Add your comment..."
                    ></textarea>
                    <button type="submit" className="post-comment">Post Comment</button>
                </form>
            </div>
            <div className="comments">
                {comments.length > 0 ? (
                    comments.map((cmt, index) => (
                        <p key={index} className="comment-item">{cmt}</p>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
    );
}

export default CommunitySection;
