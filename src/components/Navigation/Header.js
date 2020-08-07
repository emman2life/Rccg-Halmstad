import React, {useState} from 'react';
import './Header.css'
const Header = props=>{
const [displayNav, setNav] = 'false';
const [display,setDisplay] = useState(false)
    const toggleMenuHandler = ()=>{
        if(display){
        setDisplay(false)
        }else{
            setDisplay(true)
        }
    }
    const menuItemHandler = ()=>{
        setDisplay(false)
       
    }
    return(
        <header className='top-nav'>
            <div className='container'>
            <img src={require('../../images/logorccg-150x150.png')}/>
            <button onClick={toggleMenuHandler} className="mobile-menu">
                <hr></hr>
                <hr></hr>
                <hr></hr>
            </button>
            <nav className={display?"display-menu":null}>
            <ul > 
                <li><a onClick={menuItemHandler}>Home</a></li>
                <li><a onClick={menuItemHandler} href="#about-us">About</a> </li>
                
            </ul>
            </nav>
            </div>
        </header>
    );
}
export default Header