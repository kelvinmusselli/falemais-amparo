import React from 'react';
import { Container, TableData } from './styles';
import { formatPrice } from '../../util/formatPrice';
import { dataPricing } from '../../util/dataPricing';
const Pricing = () => {
  return (
    <Container>
      <TableData>
        <thead>
          <tr>
            <th>ORIGEM</th>
            <th>DESTINO</th>
            <th>R$ POR MINUTO</th>
          </tr>
        </thead>
        <tbody>
          {dataPricing.map((params) => (
            <tr>
              <td>{params.origin}</td>
              <td>{params.destiny}</td>
              <td>R$ {formatPrice(params.priceForMinute)}</td>
            </tr>
          ))}
        </tbody>
      </TableData>
    </Container>
  );
};

export default Pricing;
