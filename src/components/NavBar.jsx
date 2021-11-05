import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Nav.module.css';

const NavBar = ({ quantity }) => {
  const [change, setChange] = useState('');
  const handleChecked = (e) => {
    if (!e.target.parentElement.pathname) {
      e.target.parentElement.style.borderBottom = '4px solid red';
      setChange(e.target);
    }

    if (e.target.nodeElement === 'nav') {
      e.target.style.borderBottom = '20px solid green';
    }

    if (e.target.parentElement.pathname !== change.pathname) {
      change.parentElement.style.borderBottom = '0';
    }
  };
  return (
    <nav className={styles.nav__container}>
      <ul onClick={handleChecked}>
        <li>
          <Link to="/">Detector de mutantes</Link>
        </li>
        <li>
          <Link to="/mutants/upload">Cargar mutantes</Link>
        </li>
        <li>
          <Link to="/mutants/favorite">Mis mutantes ({quantity})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
