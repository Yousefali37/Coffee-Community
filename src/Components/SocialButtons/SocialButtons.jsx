import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function SocialButtons() {

    return (
        <div className="auth-social-container">
            <button className="auth-social-link facebook" aria-label="Continue with Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <a href="http://127.0.0.1:8000/login-google" className="auth-social-link google" aria-label="Continue with Google">
                <FontAwesomeIcon icon={faGoogle} />
            </a>
            <button className="auth-social-link twitter" aria-label="Continue with Twitter">
                <FontAwesomeIcon icon={faXTwitter} />
            </button>
        </div>
    )
}

export default SocialButtons;
