import React from 'react';
import { Container, TableData } from './styles';
import { formatPrice } from '../../util/formatPrice';

const Pricing = () => {
  const dataPricing = [
    { origin: '011', destiny: '016', priceForMinute: 1.9 },
    { origin: '016', destiny: '011', priceForMinute: 2.9 },
    { origin: '011', destiny: '017', priceForMinute: 1.7 },
    { origin: '017', destiny: '011', priceForMinute: 2.7 },
    { origin: '011', destiny: '018', priceForMinute: 0.9 },
    { origin: '018', destiny: '011', priceForMinute: 1.9 },
  ];

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
