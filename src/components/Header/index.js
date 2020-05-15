import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <h1>Fale Mais</h1>
      </Link>
      <div>
        <Link to="/prices">
          <h4>Taxas</h4>
        </Link>
        <Link to="/">
          <h4>Calcular</h4>
        </Link>
      </div>
    </Container>
  );
};

export default Header;
