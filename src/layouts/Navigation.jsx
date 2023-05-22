import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import $ from 'jquery';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Person } from '../assets/icons/person.svg';
import { ReactComponent as Cart } from '../assets/icons/cart.svg';
import useWindowSize from '../utils/helperFunctions/window.utils';
import NavButton from '../components/NavButton';
import '../styles/main.scss';

// TODO (for MVP): fix icon links (cannot click them)
function Navigation() {
  const screen = useWindowSize();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [pageScrolled, setPageScrolled] = useState(false);

  const openAndCloseSideNav = (event) => {
    // only navbutton disables/re-enables scrolling because it has classNames
    if (event.target.className) {
      if (sideNavOpen) $('body').css('overflow', 'auto');
      else $('body').css('overflow', 'hidden');
    } else {
      // all nav links re-enable scrolling because they have no classNames (undefined)
      $('body').css('overflow', 'auto');
      setSideNavOpen(false);
    }

    setSideNavOpen(!sideNavOpen);
  };

  const changeNavbarColor = () => {
    window.scrollY >= 75 ? setPageScrolled(true) : setPageScrolled(false);
  };

  useEffect(() => {
    if (screen.width >= 769 && sideNavOpen) {
      setSideNavOpen(false);
      $('body').css('overflow', 'auto');
    }
  });

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener('scroll', changeNavbarColor);
  });

  // TODO (after MVP): refactor navbar to be single ul (https://www.w3schools.com/howto/howto_css_topnav_centered.asp)
  return (
    <>
      <div>
        <NavButton
          handleButtonClick={openAndCloseSideNav}
          sideNavOpen={sideNavOpen}
        />
      </div>
      <nav
        className={
          pageScrolled
            ? 'navbar page-scrolled'
            : sideNavOpen
            ? 'navbar side-nav-open'
            : 'navbar'
        }
      >
        <ul className="nav-text-links">
          <li>
            <Link to="/shop" onClick={openAndCloseSideNav}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/subscriptions" onClick={openAndCloseSideNav}>
              Subscriptions
            </Link>
          </li>
        </ul>
        <ul className="nav-logo-link">
          <li>
            <Link to="/" onClick={openAndCloseSideNav}>
              <div>
                <span>88</span> ROASTING
              </div>
            </Link>
          </li>
        </ul>
        <ul className="nav-icon-links">
          <li>
            <Link onClick={openAndCloseSideNav}>
              {sideNavOpen ? 'Search' : <Search />}
            </Link>
          </li>
          <li>
            <Link to="/account" onClick={openAndCloseSideNav}>
              {sideNavOpen ? 'Account' : <Person />}
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={openAndCloseSideNav}>
              {sideNavOpen ? 'Cart' : <Cart />}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
