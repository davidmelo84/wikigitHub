import React from 'react';
import { InputContainer } from './styles';

function Input({ value, onChange }) {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} aria-label="Campo de busca de repositório" />
    </InputContainer>
  );
}

export default Input;
