import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <h1>Fale Mais</h1>
      </Link>
      <h4>{'pageActual'}</h4>
    </Container>
  );
};

export default Header;
