import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Person } from '../assets/icons/person.svg';
import { ReactComponent as Cart } from '../assets/icons/cart.svg';
import '../styles/main.scss';

function Navigation() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <ul className={open ? 'nav-links active' : 'nav-links'}>
          <li className="nav-text-item">
            <Link to="/shop" className="nav-link leftmost">
              Shop
            </Link>
          </li>
          <li className="nav-text-item">
            <Link to="/shop" className="nav-link">
              Subscriptions
            </Link>
          </li>
        </ul>
        <div onClick={handleClick} className="nav-icon">
          {open ? 'close' : 'open'}
        </div>
        <ul className={open ? 'nav-links active' : 'nav-links'}>
          <li className="nav-icon-item">
            <Link className="nav-link" onClick={closeMenu}>
              <Search />
            </Link>
          </li>
          <li className="nav-icon-item">
            <Link to="/account" className="nav-link" onClick={closeMenu}>
              <Person />
            </Link>
          </li>
          <li className="nav-icon-item">
            <Link to="/cart" className="nav-link" onClick={closeMenu}>
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
