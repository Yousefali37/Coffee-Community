import VotingHeroSection from '../Voting Hero Section/VotingHeroSection';
import './PictureVoting.css';
import picData from '../Voting Data/PictureData.json';
import VotingCard from './../Voting Card/VotingCard';


function PictureVoting() {
    return (
        <div className='row justify-content-center align-items-center gap-4'>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='col-10'>
                    <VotingHeroSection title={"Picture of the Week"} description={"Vote for your favorite Picture this Week!"} time={"5"} />
                </div>
            </div>
            <div className='container row gap-3 justify-content-center align-items-center'>
                {
                    picData.map((item) => {
                        return (
                            <div className='col-md-3 col-sm-12' key={item.id}>
                                <VotingCard id={item.id} img={item.img} desc={item.desc} title={item.title} votesNo={item.votingNo} />
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button className='see-more'> 
                    Submit
                </button>
            </div>
        </div>
    )
}

export default PictureVoting;