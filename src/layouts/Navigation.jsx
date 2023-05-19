import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import $ from 'jquery';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Person } from '../assets/icons/person.svg';
import { ReactComponent as Cart } from '../assets/icons/cart.svg';
import NavButton from '../components/NavButton';
import '../styles/main.scss';

function Navigation() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [pageScrolled, setPageScrolled] = useState(false);

  // TODO: breaks (able to scroll) if user scrolls immediately after clicking navbutton
  const openAndCloseSideNav = (event) => {
    let className = event.target.className;
    // disables/re-enables scrolling when sideNav is open/closed
    if (!sideNavOpen && className === 'bar') {
      $('body').css('overflow', 'hidden');
    } else if (sideNavOpen && className === 'bar') {
      $('body').css('overflow', 'auto');
    }

    if (
      sideNavOpen &&
      (className === 'link' || className === 'link leftmost')
    ) {
      $('body').css('overflow', 'auto');
      setSideNavOpen(false);
    }
    setSideNavOpen(!sideNavOpen);
  };

  const changeNavbarColor = () => {
    window.scrollY >= 75 ? setPageScrolled(true) : setPageScrolled(false);
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener('scroll', changeNavbarColor);
  });

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
        <ul className="nav-links">
          <li>
            <Link
              to="/shop"
              className="link leftmost"
              onClick={openAndCloseSideNav}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/subscriptions"
              className="link"
              onClick={openAndCloseSideNav}
            >
              Subscriptions
            </Link>
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <Link className="link" onClick={openAndCloseSideNav}>
              {sideNavOpen ? 'Search' : <Search />}
            </Link>
          </li>
          <li>
            <Link to="/account" className="link" onClick={openAndCloseSideNav}>
              {sideNavOpen ? 'Account' : <Person />}
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link" onClick={openAndCloseSideNav}>
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
