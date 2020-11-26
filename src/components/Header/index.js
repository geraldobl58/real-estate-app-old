import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper } from './styled';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <HeaderWrapper>
      <section>
        <div>
          <img src={logo} alt="Real Estate" />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/properties">Imóveis</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      </section>
    </HeaderWrapper>
  );
}
