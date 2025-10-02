import RocketLaunch from '../assets/RocketLaunch.svg'
import WelcomeImg from '../assets/welcomeimg.png'
import Member from '../assets/Member.svg'
import DogIst from '../assets/DogIst.png'
import CatIst from '../assets/CatIst.png'
import BearIst from '../assets/BearIst.png'
import MashIst from '../assets/MashIst.png'
import RobotIst from '../assets/RobotIst.png'
import Mash2Ist from '../assets/Mash2ist.png'
import Mash3Ist from '../assets/Mash3ist.png'
import Robot2Ist from '../assets/Robot2Ist.png'
import Robot3Ist from '../assets/Robot3Ist.png'
import FAuthor from '../assets/Avatar1.svg'
import SAuthor from '../assets/Avatar2.svg'
import TAuthor from '../assets/Avatar3.svg'

import { useNavigate } from 'react-router-dom';

import './Marketplace.css'

const Marketplace = () => {


    const navigateToRank = useNavigate()


    const navToRank = () => {
        navigateToRank('/rankings');
    }
    return ( 
        <div className='wrap'>
            <div className='welcome-sec-wrapper'>
                <div className="to-user-info">
                    <h1>
                        Discover digital art & Collect NFTs
                    </h1>
                    <p>
                        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                    </p>
                    <button>
                        <img src={RocketLaunch}/>Get started
                    </button>
                    <div className="statistic-info">
                        <div>
                            <h2>240k+ </h2>
                            <p>Total Sale</p>
                        </div>
                        <div>
                            <h2>100k+</h2>
                            <p>Auctions</p>
                        </div>
                        <div>
                            <h2>240k+</h2>
                            <p>Artists</p>
                        </div>
                    </div>
                </div>
                <div className="welcome-img">
                    <img src={WelcomeImg} />
                    <h1>Space Walking</h1>
                    <p><img src={Member} /> Animakid</p>
                </div>
            </div>
            <div className="fav-trends">
                <h1>Trending Collection</h1>
                <p>Checkout our weekly updated trending collection.</p>
                <div className="ilustration">
                    <div className="ilust">
                        <img src={DogIst} />
                        <div className="boxes">
                            <img src={CatIst}/>
                            <img src={BearIst}/>
                            <div>
                                <h1>1025+</h1>
                            </div>
                        </div>
                        <div className="author">
                            <h1>Disco Machines</h1>
                            <p><img src={FAuthor}/>MrFox</p>
                        </div>
                    </div>
                    <div className="ilust">
                        <img src={MashIst} />
                        <div className="boxes">
                            <img src={Mash2Ist}/>
                            <img src={Mash3Ist}/>
                            <div>
                                <h1>1025+</h1>
                            </div>
                        </div>
                        <div className="author">
                            <h1>Disco Machines</h1>
                            <p><img src={SAuthor}/>Shroomie</p>
                        </div>
                    </div>
                    <div className="ilust">
                        <img src={RobotIst} />
                        
                        <div className="boxes">
                            <img src={Robot2Ist}/>
                            <img src={Robot3Ist}/>
                            <div>
                                <h1>1025+</h1>
                            </div>
                        </div>
                        <div className="author">
                            <h1>Disco Machines</h1>
                            <p><img src={TAuthor}/>BeKind2Robots</p>
                        </div>
                    </div>
                </div>

                <div className="top-ranking">
                    <div className="rank-info">
                        <div className="rank-info-title">
                            <h1>Top creators</h1>
                            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
                        </div>
                        <div className="get-rank-page">
                            <button
                                onClick={navToRank}
                            ><img src={RocketLaunch}/>View Rankings</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Marketplace;