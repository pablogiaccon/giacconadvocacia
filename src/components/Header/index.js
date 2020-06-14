import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';

import { Container } from './styles';

import ContactMedia from '../ContactMedia';

const Header = () => {
  const [show, setShow] = useState(true);

  function handleOpenMenu() {
    const menuSection = document.getElementsByClassName('menu-section');
    document.body.style.overflow = show ? 'hidden' : 'initial';
    menuSection[0].classList.toggle('on', show);
    setShow(!show);
  }

  const handleCloseMenuByNav = useCallback(() => {
    const menuSection = document.getElementsByClassName('menu-section');
    if (menuSection[0].classList.contains('on')) {
      menuSection[0].classList.toggle('on');
      setShow(true);
    }
    document.body.style.overflow = 'initial';
  }, []);

  return (
    <Container>
      <header>
        <Link className="logo" to="/">
          <p className="principal">GIACCON</p>
          <p className="secund">ADVOCACIA E CONSULTORIA JURÍDICA</p>
        </Link>

        <span>
          <ContactMedia />
        </span>
      </header>
      <div className="menu-section">
        <button className="menu-toggle" type="button" onClick={handleOpenMenu}>
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </button>

        <nav>
          <ul>
            <li>
              <Link to="/" onClick={handleCloseMenuByNav}>HOME</Link>
            </li>
            <li>
              <Link to="/OccupationArea" onClick={handleCloseMenuByNav}>ÁREA DE ATUAÇÃO</Link>
            </li>
            <li>
              <Link to="/About" onClick={handleCloseMenuByNav}>SOBRE MIM</Link>
            </li>
            <li>
              <Link to="/Contact" onClick={handleCloseMenuByNav}>CONTATO</Link>
            </li>
            <li>
              <Link to="/Blog" onClick={handleCloseMenuByNav}>BLOG</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
