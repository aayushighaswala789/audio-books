import React from 'react'
import "./HeroSection.css"

const HeroSection = () => {
    return (
        <div className='heroSection'>
            <div className="heroContent">
                <div className='albumimage'>
                    <img src="/images/Astrophysics-for-People-in-a-Hurry-eBook@3x.png" alt="album pic" />
                </div>
                <div className='album-wrapper'>
                    <div className='albumDetails'>
                        <div className="albumTitle">Astrophysics for People in a Hurry’s Summary</div>
                        <div className="albumSubTitle">Key Insights & Analysis</div>
                        <div className="albumAuthor">Kelly Brogan, MD with Kristin Loberg</div>
                        <div className='hr'></div>
                        <div className='forAlbum'>
                            <div className='iconDetailWrapper'>
                                <div className="icon"><img src="/images/read.svg" alt="read" /></div>
                                <div className="label">18 min read</div>
                            </div>
                            <div className='iconDetailWrapper'>
                                <div className="icon"><img src="/images/listen.svg" alt="listen" /></div>
                                <div className="label">14 min listen</div>
                            </div>
                            <div className='iconDetailWrapper'>
                                <div className="icon"><img src="/images/addLib.svg" alt="Library" /></div>
                                <div className="label">Add to Library</div>
                            </div>
                            <div className='iconDetailWrapper'>
                                <div className="icon"><img src="/images/butbooks.svg" alt="Book" /></div>
                                <div className="label">Buy Book</div>
                            </div>
                        </div>
                        <div className='hr-1'></div>
                        <div className='bussinessBtns'>
                            <button>Business & Finance</button>
                            <button>Business & Finance</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroSection