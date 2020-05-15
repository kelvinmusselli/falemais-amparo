import React from 'react';

import { Container, Form, PhoneAndLocale, Plans, TimeUsed } from './styles';

const FormCall = () => {
  return (
    <Container>
      <Form>
        <PhoneAndLocale>
          <select name="" id="">
            <option value="">DDD</option>
            <option value="">011</option>
          </select>
          <input
            type="text"
            placeholder="Número do telefone"
            mask="(011) 9/9999-5959"
          />
        </PhoneAndLocale>
        <Plans>
          <select name="" id="">
            <option value="">Planos</option>
            <option value="">Sem plano</option>
            <option value="">Fale mais 30</option>
          </select>
        </Plans>
        <TimeUsed>
          <input type="number" name="" id="" placeholder="Minutos usados" />
        </TimeUsed>
      </Form>
    </Container>
  );
};

export default FormCall;
