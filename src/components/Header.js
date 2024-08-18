import React, { useState } from 'react';
import logo from '../Assets/logo.png'
import {Link} from 'react-scroll'
import menu from '../Assets/burger-bar.png'
const Header = () => {
  const [showMenu,setShowmenu]=useState(false)
  return (
    <div className='header-container'>
      <img src={logo} alt="logo"  id="logo-img" />
   
    
   <div className='desktoplist'>
<Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className='desktopListItem'> Home</Link>
<Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} offset={-50}  className='desktopListItem'>About</Link>
<Link activeClass='active' to='containerProject' spy={true} smooth={true} duration={500} offset={0} className='desktopListItem'>Projects</Link>
<Link activeClass='active' to='contact' spy={true} smooth={true} duration={500} offset={-50}  className='desktopListItem'>Contact</Link>

   </div>
    


    <img src={menu} alt="menu"  className="mobMenu" onClick={()=>setShowmenu(!showMenu)}/>
   
    
   <div className='NavMenu' style={{display: showMenu? 'flex':'none'}}>
<Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className='ListItem' onClick={()=>setShowmenu(false)} > Home</Link>
<Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} offset={-50}  className='ListItem' onClick={()=>setShowmenu(false)} >About  </Link>
<Link activeClass='active' to='containerProject' spy={true} smooth={true} duration={500} offset={0} className='ListItem' onClick={()=>setShowmenu(false)} >Projects</Link>
<Link activeClass='active' to='contact' spy={true} smooth={true} duration={500} offset={-50}  className='ListItem'onClick={()=>setShowmenu(false)} >Contact</Link>

   </div>
    </div>
  )
}

export default Header
