import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={`${styles['footer']} cssanimation fadeIn`}>
            <div>
                <img src="https://res.cloudinary.com/dtj4jwfs7/image/upload/v1741350369/Heart_bmk9xk.svg" alt="Heart Icon" />
            </div>
            <div className={`${styles['footerTitle']}`}>
                <h1>Join Our Coffee Community</h1>
            </div>
            <div className={`${styles['footerText']}`}>
                <p>Get weekly recipes and coffee tips delivered to your inbox</p>
            </div>
            <form className={`${styles['footerInput']}`}>
                <input type="text" placeholder='Enter your email' />
                <div className={`${styles['footerButton']}`}>
                    <button>Subscribe</button>
                </div>
            </form>
        </div>
    );
}

export default Footer;
