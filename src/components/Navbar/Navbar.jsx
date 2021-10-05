import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { CartWidget } from "./NavComponents/CartWidget";
import MenuItems from "./MenuItems";
import './Navbar.css';


const Navbar = ({carrito}) => {
  

  const [clicked, setClicked] = useState(false)
  const switchClicked = () => { clicked ? setClicked(false) : setClicked(true)}
  return (
    
    <nav className="NavbarItems">
      <h1 className="navbar-logo">React <FontAwesomeIcon icon={faReact} /></h1>
      <div className="menu-icon" onClick={switchClicked}>
      <FontAwesomeIcon  className={clicked ? 'faTimes' : 'faBars' } icon={clicked ? faTimes : faBars} > </FontAwesomeIcon>
      </div>  
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                {item.title}
                </a>
              </li>)
          })}
        </ul>
        <CartWidget carrito={carrito} />
    </nav>
  )
  
}

export default Navbar


