import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Person } from '../assets/icons/person.svg';
import { ReactComponent as Cart } from '../assets/icons/cart.svg';
import NavButton from '../components/NavButton';
import '../styles/main.scss';

function Navigation() {
  const [shown, setShown] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  const handleButtonClick = () => {
    setShown(!shown);
  };

  const closeMenu = () => {
    setShown(false);
  };

  const changeNavbarColor = () => {
    console.log(window.scrollY);
    window.scrollY >= 75 ? setNavScrolled(true) : setNavScrolled(false);
    console.log(navScrolled);
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener('scroll', changeNavbarColor);
  });

  return (
    <>
      <nav className={navScrolled ? 'navbar navScrolled' : 'navbar'}>
        <div className="nav-icon">
          <NavButton handleButtonClick={handleButtonClick} shown={shown} />
        </div>
        <ul className={shown ? 'nav-links active' : 'nav-links'}>
          <li className="nav-text-item">
            <Link
              to="/shop"
              className={
                navScrolled
                  ? 'nav-link leftmost navScrolledLink'
                  : 'nav-link leftmost'
              }
            >
              Shop
            </Link>
          </li>
          <li className="nav-text-item">
            <Link
              to="/subscriptions"
              className={navScrolled ? 'nav-link navScrolledLink' : 'nav-link'}
            >
              Subscriptions
            </Link>
          </li>
        </ul>
        <ul className={shown ? 'nav-links active' : 'nav-links'}>
          <li className="nav-icon-item">
            <Link
              className={navScrolled ? 'nav-link navScrolledLink' : 'nav-link'}
              onClick={closeMenu}
            >
              <Search />
            </Link>
          </li>
          <li className="nav-icon-item">
            <Link
              to="/account"
              className={navScrolled ? 'nav-link navScrolledLink' : 'nav-link'}
              onClick={closeMenu}
            >
              <Person />
            </Link>
          </li>
          <li className="nav-icon-item">
            <Link
              to="/cart"
              className={navScrolled ? 'nav-link navScrolledLink' : 'nav-link'}
              onClick={closeMenu}
            >
              <Cart />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
