import './Community.css';
import CommunityFilterBar from "../../Components/Community/Community Filter Bar/CommunityFilterBar";
import CommunityPost from "../../Components/Community/Community Posts/CommunityPost";
import HeroSection from "../../Components/Hero Section/HeroSection";
import CommunityCategories from '../../Components/Community/Community Categories/CommunityCategories';
import data from './Community Data/Community.json';
import { useState } from 'react';

function Community() {
    const [category, setCategory] = useState("allPosts");

    const filteredCommunity = category === "allPosts"
        ? data
        : data.filter(post => post.category === category);

    return (
        <div className="community-wrapper">
            <HeroSection
                page={"community"}
                title={"Coffee Community"}
                text={"Connect with fellow coffee enthusiasts, share brewing experiences, and discover new tips and techniques."}
            />
            <div className="community-content">
                <div className="row">
                    {/* Sidebar */}
                    <aside className="col-md-4 col-lg-3 mb-4">
                        <div className="community-sidebar p-3 shadow-sm rounded bg-white">
                            <CommunityCategories setCategory={setCategory} />
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="col-md-8 col-lg-9">
                        <CommunityFilterBar />
                        <div className="row g-3">
                            {filteredCommunity.map((post) => (
                                <div key={post.id} className="col-md-12 col-lg-12">
                                    <CommunityPost 
                                        comments={post.comments}
                                        desc={post.desc}
                                        avatar={post.avatar}
                                        likes={post.likes}
                                        username={post.username}
                                        title={post.title}
                                        time={post.timestamp}
                                        type={post.category}
                                        id={post.id}
                                    />
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Community;
