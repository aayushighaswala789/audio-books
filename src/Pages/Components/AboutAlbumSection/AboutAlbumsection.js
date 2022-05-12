import React, { useState } from 'react'
import { Player } from '../Player/Player'
import "./AboutAlbumSection.css"
const AboutAlbumsection = () => {
    const subNav = ["Summary", "Insights", "Quotes", "Community"]
    const [seledtedNav, setseledtedNav] = useState(subNav[0])
    return (
        <div className='about-album-section'>
            <div className='album-nav'>
                {
                    subNav.map((nav, ind) => <div key={ind} className={`album-item ${(seledtedNav === nav) && 'active'}`} onClick={() => setseledtedNav(nav)}>{nav}</div>)
                }
            </div>
            <div className="album-wrapper">
                <div className='album-right-part'>
                    <h2 className="heading">Overview</h2>
                    <div className="content-wrapper">
                        Robert Wright’s Why Buddhism Is True: The Science and Philosophy of Meditation and Enlightenment (2017) considers Buddhism through the lens of evolutionary psychology, a discipline that regards natural selection as the provenance of many mental traits. Focusing on his personal experience with mindfulness meditation, Wright describes a path to truth, using ideas from the realms of psychology and modern, scientifically influenced philosophy to illuminate ancient wisdom.
                        <br></br>Most people are profoundly out of touch with the nature of objective reality. The human brain has been wired by evolution to experience the world in a deeply subjective, distorted way. Human genes have been programmed to propagate the species, not perceive truth or attain lasting happiness. People seek happiness under the false assumption that one day they can attain it permanently. But happiness is fleeting, in part because of how the brain experiences it, and in part due to inevitable change and the passage of time. Humans are caught in the cycle of seeking out pleasurable experiences and feeling bad in the in-between moments that constitute most day-to-day experiences. This is the source of much human suffering.
                        Human consciousness is influenced by “false feelings,” which seem 
                    </div>
                    <h2 className="heading">Key Insight 1</h2>
                    <div className="content-wrapper">
                        Robert Wright’s Why Buddhism Is True: The Science and Philosophy of Meditation and Enlightenment (2017) considers Buddhism through the lens of evolutionary psychology, a discipline that regards natural selection as the provenance of many mental traits. Focusing on his personal experience with mindfulness meditation, Wright describes a path to truth, using ideas from the realms of psychology and modern, scientifically influenced philosophy to illuminate ancient wisdom.
                        <br></br>Most people are profoundly out of touch with the nature of objective reality. The human brain has been wired by evolution to experience the world in a deeply subjective, distorted way. Human genes have been programmed to propagate the species, not perceive truth or attain lasting happiness. People seek happiness under the false assumption that one day they can attain it permanently. But happiness is fleeting, in part because of how the brain experiences it, and in part due to inevitable change and the passage of time. Humans are caught in the cycle of seeking out pleasurable
                    </div>
                    <h2 className="heading">Key Insight 2</h2>
                    <div className="content-wrapper">
                        Robert Wright’s Why Buddhism Is True: The Science and Philosophy of Meditation and Enlightenment (2017) considers Buddhism through the lens of evolutionary psychology, a discipline that regards natural selection as the provenance of many mental traits. Focusing on his personal experience with mindfulness meditation, Wright describes a path to truth, using ideas from the realms of psychology and modern, scientifically influenced philosophy to illuminate ancient wisdom.
                        Most people are profoundly out of touch with the nature of objective reality. The human brain has been 
                    </div>
                    <div className="wrapper">
                        <div className="button-wrapper">
                            <p className="text">Want to read more?</p>
                            <button className="btn">Try 7 days free</button>
                        </div>
                    </div>
                </div>
                <div className='album-audio-wrapper'>
                    <Player />
                </div>
            </div>
        </div>
    )
}

export default AboutAlbumsection