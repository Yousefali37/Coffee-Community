import { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import SocialButtons from './../SocialButtons/SocialButtons';


const AuthForm = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    const handleSignUpClick = () => setIsActive(true);
    const handleSignInClick = () => setIsActive(false);
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className={`auth-container ${isActive ? "right-panel-active" : ""}`}>
                <>
                    {/* Sign Up Form */}
                    <div className="auth-form-container auth-sign-up-container">
                        <form
                            className="auth-form"
                        >
                            <h1>Create Account</h1>
                            <SocialButtons />
                            <span className="mb-3">or use your email for registration</span>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name..."
                                    className="auth-input"
                                    aria-label="Name"
                                    required
                                />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email..."
                                    className="auth-input"
                                    aria-label="Email"
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password..."
                                    className="auth-input"
                                    aria-label="Password"
                                    minLength="8"
                                    required
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <button className="auth-button keyboard-btn" onClick={()=> {
                                navigate('/')
                            }}>
                                Sign Up
                            </button>
                        </form>
                    </div>

                    {/* Sign In Form */}
                    <div className="auth-form-container auth-sign-in-container">
                        <form
                            className="auth-form"
                        >
                            <h1>Sign In</h1>
                            <SocialButtons />
                            <span className="mb-3">or use your account</span>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email..."
                                    className="auth-input"
                                    aria-label="Email"
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password..."
                                    className="auth-input"
                                    aria-label="Password"
                                    minLength="8"
                                    required
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <a href="#" className="auth-link">
                                Forgot your password?
                            </a>
                            <button className="auth-button" onClick={()=> {
                                navigate('/')
                            }}>
                                Sign In
                            </button>
                        </form>
                    </div>
                </>

                {/* Overlay */}
                <div className="auth-overlay-container">
                    <div className="auth-overlay">
                        <div className="auth-overlay-panel auth-overlay-left">
                            <h1 className="header-text mb-3">Welcome back, Coffee Fanatic!</h1>
                            <p>Your cart’s safe with us. Let’s brew!</p>
                            <button className="auth-button ghost ghost-btn" onClick={handleSignInClick}>
                                Sign In
                            </button>
                        </div>
                        <div className="auth-overlay-panel auth-overlay-right">
                            <h1 className="header-text mb-3">Hey, Coffee Newbie!</h1>
                            <p className="text-shadow-1">
                                Join the bean squad.{" "}
                                <span className="text-danger fw-bold text-capitalize text-shadow-2">
                                    Warning: Highly addictive!.
                                </span>
                            </p>
                            <button className="auth-button ghost ghost-btn" onClick={handleSignUpClick}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
