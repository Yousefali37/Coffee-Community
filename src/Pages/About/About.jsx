import { faAward, faGraduationCap, faMugHot, faUsers } from '@fortawesome/free-solid-svg-icons';
import AboutCard from '../../Components/About/About Card/AboutCard';
import HeroSection from './../../Components/Hero Section/HeroSection';
import OurStory from './../../Components/About/Our Story/OurStory';
import WebsiteCard from '../../Components/About/About website card/WebsiteCard';
import Footer from '../../Components/Footer/Footer';
import WebsiteCardData from './About Data/WebsiteCard.json';
import AboutCardData from './About Data/AboutCard.json';
import './About.css';


function About() {


    const iconMap = {
        faMugHot: faMugHot,
        faUsers: faUsers,
        faAward: faAward,
        faGraduationCap: faGraduationCap
    }

    return (
        <div className='cssanimation fadeIn'>
            <HeroSection title={"About Brew's of anarchy"} text={"Your trusted companion in the journey of coffee exploration and mastery. We're passionate about bringing the art and science of coffee brewing to everyone."} />
            <div className='p-5 d-flex justify-content-center align-items-center flex-column gap-5'>
                <h1 className='our-impact'>Our Core Values</h1>
                <div className='w-100 d-flex justify-content-center align-items-center gap-4 flex-wrap'>
                    {
                        AboutCardData.map((data) => {
                            return (
                                <AboutCard key={data.id} icon={iconMap[data.icon]} title={data.title} description={data.desc} />
                            )
                        })
                    }
                </div>
            </div>
            <OurStory />
            <div className='p-5 d-flex justify-content-center align-items-center flex-column gap-5 cssanimation fadeIn'>
                <h1 className='our-impact'>Our Impact</h1>
                <div className='w-100 d-flex justify-content-center align-items-center gap-4 flex-wrap cssanimation fadeIn'>
                    {
                        WebsiteCardData.map((data) => {
                            return (
                                <WebsiteCard number={data.number} desc={data.desc} key={data.id} />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;