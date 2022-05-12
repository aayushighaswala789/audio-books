import React,{ useState } from 'react'
import "./Header.css"

const Header = () => {
    const navItems = ["Discover", "Search", "Try Instaread", "Login"]
    const [selectedNav, setSelectedNav] = useState(navItems[0])
    return (
        <div className='header'>
            <div className='header-content'>
                <div className='logo'><img src='/images/instaread_logo_grey.svg'></img> </div>
                <div className='nav-items'>
                    {
                        navItems.map((nav,ind) => <div className={selectedNav === nav ? "isActive nav-item" : 'nav-item'} key={ind} onClick={()=>setSelectedNav(nav)}>{nav}</div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Header