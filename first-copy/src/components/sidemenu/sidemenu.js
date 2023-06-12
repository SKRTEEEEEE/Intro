import { useEffect, useContext, useState } from 'react';
import './sidemenu.css';
import gifProfile from './icons/gifProfile.gif';
import firstItem from './icons/logo1.gif';
import secondItem from './icons/logo2.gif';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../hooks/AuthContext';

export function SideMenu() {
  const { user, logout } = useContext(AuthContext);
  const [menuExpanded, setMenuExpanded] = useState(false);

  useEffect(() => {
    if (user) {
      fetchUserInfo();
    }
  }, [user]);

  const fetchUserInfo = () => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((userInfo) => {
        console.log(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeMenu = () => {
    setMenuExpanded(false);
    document.querySelector('body').classList.remove('body-expanded');
  };

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
    document.querySelector('body').classList.toggle('body-expanded');
  };

  return (
    <div
      id="sidemenu"
      className={menuExpanded ? 'menu-expanded' : 'menu-collapsed'}
    >
      <div id="header">
        <div id="title">
          <span>QUEEN420</span>
        </div>
        <div id="menu-btn" onClick={toggleMenu}>
          <div className="btn-hamburger"></div>
          <div className="btn-hamburger"></div>
          <div className="btn-hamburger"></div>
        </div>
      </div>

      <div id="profile">
        <div id="photo">
          <Link to="/" onClick={closeMenu}>
            <img src={gifProfile} alt="" />
          </Link>
        </div>

        <div id="name">
          {/* {username ? (
            <span>Hola {username}</span>
          ) : ( */}
          <span>NextGenTech3.0</span>
          {/* )} */}
        </div>
      </div>

      <div id="menu-items">
        {user && (
          <div className="item">
            <Link
              to="/"
              onClick={() => {
                closeMenu();
                logout();
              }}
            >
              <div className="icon">
                <img src={firstItem} alt="" />
              </div>
              <div className="title">
                <span>Log Out</span>
              </div>
            </Link>
          </div>
        )}
        {!user && (
          <div className="item">
            <Link to="/login" onClick={closeMenu}>
              <div className="icon">
                <img src={firstItem} alt="" />
              </div>
              <div className="title">
                <span>Log In / Sign Up</span>
              </div>
            </Link>
          </div>
        )}

        <div className="item">
          <Link to="/" onClick={closeMenu}>
            <div className="icon">
              <img src={secondItem} alt="" />
            </div>
            <div className="title">
              <span>Free Mint Request</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
