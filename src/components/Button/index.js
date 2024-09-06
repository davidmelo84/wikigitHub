import React from 'react';
import { ButtonContainer } from './styles';

function Button({ onClick, children = 'Buscar', ariaLabel = 'Botão de busca' }) {
  return (
    <ButtonContainer onClick={onClick} aria-label={ariaLabel}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
