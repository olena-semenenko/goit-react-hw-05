import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
const Navigation = () => {
  const activePage = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <header>
      <nav>
        <NavLink to="/" className={activePage}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activePage}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
