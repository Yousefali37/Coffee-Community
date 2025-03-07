import { faAward, faGraduationCap, faMugHot, faUsers } from '@fortawesome/free-solid-svg-icons';
import AboutCard from '../../Components/About/About Card/AboutCard';
import HeroSection from './../../Components/Hero Section/HeroSection';
import OurStory from './../../Components/About/Our Story/OurStory';
import WebsiteCard from '../../Components/About/About website card/WebsiteCard';

function About() {
    return (
        <div>
            <HeroSection title={"About Brew's of anarchy"} text={"Your trusted companion in the journey of coffee exploration and mastery. We're passionate about bringing the art and science of coffee brewing to everyone."} />
            <div className='p-5 d-flex justify-content-center align-items-center gap-4 flex-wrap'>
                <AboutCard icon={faMugHot} title={"Quality First"} description={"We believe in exceptional coffee experiences through quality ingredients and methods."} />
                <AboutCard icon={faUsers} title={"Community Driven"} description={"Our thriving community shares knowledge, experiences, and passion for coffee."} />
                <AboutCard icon={faAward} title={"Expert Guidance"} description={"Learn from certified baristas and coffee experts from around the world."} />
                <AboutCard icon={faGraduationCap} title={"Continuous Learning"} description={"Stay updated with the latest brewing techniques and coffee trends."} />
            </div>
            <OurStory />
            <div className='p-5 d-flex justify-content-center align-items-center gap-4 flex-wrap'>
                <div className='col-md-3 col-sm-12'>
                    <WebsiteCard number={"10K+"} desc={"Active Members"} />
                </div>
                <div className='col-md-3 col-sm-12'>
                    <WebsiteCard number={"500+"} desc={"Coffee Recipes"} />
                </div>
                <div className='col-md-3 col-sm-12'>
                    <WebsiteCard number={"50+"} desc={"Expert Contributors"} />
                </div>
            </div>
        </div>
    )
}

export default About;