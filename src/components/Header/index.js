// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          type="button"
          className="trigger-button"
          testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="berger" />
        </button>
      }
    >
      {close => (
        <>
          <div className="pop-up-major">
            <ul className="pop-up-container">
              <li className="sub-home">
                <AiFillHome className="pop-up-home" />

                <Link to="/" className="home-title" onClick={() => close()}>
                  <h1>HOME</h1>
                </Link>
              </li>
              <li className="sub-home">
                <BsInfoCircleFill className="pop-up-home" />
                <Link
                  to="/about"
                  className="home-title"
                  onClick={() => close()}
                >
                  <h1>About</h1>
                </Link>
              </li>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
                testid="closeButton"
              >
                <IoMdClose className="berger-close" />
              </button>
            </ul>
          </div>
        </>
      )}
    </Popup>
  </div>
)

export default Header
