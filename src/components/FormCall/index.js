import React, { useState } from 'react';

import {
  Container,
  Form,
  PhoneAndLocale,
  PhoneAndLocaleDestiny,
  Plans,
  TimeUsed,
  DivResult,
  TableResult,
} from './styles';

import { formatPrice } from '../../util/formatPrice';
const FormCall = () => {
  const [paramsToCalc, setCalc] = useState({});
  const [resultCalc, setResult] = useState(null);
  const getValueDDD = (e) => {
    setCalc({ ...paramsToCalc, ddd1: e.target.value });
  };
  const getValueDDDdestiny = (e) => {
    setCalc({ ...paramsToCalc, ddd2: e.target.value });
  };
  const getTime = (e) => {
    setCalc({ ...paramsToCalc, time: e.target.value });
  };
  const getPlan = (e) => {
    setCalc({ ...paramsToCalc, plan: e.target.value });
  };

  const calcDestiny = () => {
    const paramsForCalculate = paramsToCalc;
    const notPlan = paramsForCalculate.plan === '0';
    const planThirty = paramsForCalculate.plan === '30';
    const planSixty = paramsForCalculate.plan === '60';
    const planOneHundredTwenty = paramsForCalculate.plan === '120';
    const getTime = paramsForCalculate.time;
    const ddd1 = paramsForCalculate.ddd1;
    const ddd2 = paramsForCalculate.ddd2;

    switch (ddd1) {
      case '011':
        switch (ddd2) {
          case '016':
            if (notPlan) {
              return setResult(getTime * 1.9);
            }
            if (planThirty) {
              if (getTime > 30) {
                return setResult((getTime - 30) * 1.9);
              } else {
                return setResult(0);
              }
            }
            if (planSixty) {
              if (getTime > 60) {
                return setResult((getTime - 60) * 1.9);
              } else {
                return setResult(0);
              }
            }
            if (planOneHundredTwenty) {
              if (getTime > 120) {
                return setResult((getTime - 120) * 1.9);
              } else {
                return setResult(0);
              }
            }
            break;
          case '017':
            if (notPlan) {
              return setResult(getTime * 1.7);
            }
            if (planThirty) {
              if (getTime > 30) {
                return setResult((getTime - 30) * 1.7);
              } else {
                return setResult(0);
              }
            }
            if (planSixty) {
              if (getTime > 60) {
                return setResult((getTime - 60) * 1.7);
              } else {
                return setResult(0);
              }
            }
            if (planOneHundredTwenty) {
              if (getTime > 120) {
                return setResult((getTime - 120) * 1.7);
              } else {
                return setResult(0);
              }
            }
            break;
          case '018':
            if (notPlan) {
              return setResult(getTime * 0.9);
            }
            if (planThirty) {
              if (getTime > 30) {
                return setResult((getTime - 30) * 0.9);
              } else {
                return setResult(0);
              }
            }
            if (planSixty) {
              if (getTime > 60) {
                return setResult((getTime - 60) * 0.9);
              } else {
                return setResult(0);
              }
            }
            if (planOneHundredTwenty) {
              if (getTime > 120) {
                return setResult((getTime - 120) * 0.9);
              } else {
                return setResult(0);
              }
            }
            break;
          default:
            break;
        }
        break;
      case '016':
        switch (ddd2) {
          case '011':
            if (notPlan) {
              return setResult(getTime * 2.9);
            }
            if (planThirty) {
              if (getTime > 30) {
                return setResult((getTime - 30) * 2.9);
              } else {
                return setResult(0);
              }
            }
            if (planSixty) {
              if (getTime > 60) {
                return setResult((getTime - 60) * 2.9);
              } else {
                return setResult(0);
              }
            }
            if (planOneHundredTwenty) {
              if (getTime > 120) {
                return setResult((getTime - 120) * 2.9);
              } else {
                return setResult(0);
              }
            }
            break;
          default:
            break;
        }
        break;
      case '017':
        switch (ddd2) {
          case '011':
            if (notPlan) {
              return setResult(getTime * 2.7);
            }
            if (planThirty) {
              if (getTime > 30) {
                return setResult((getTime - 30) * 2.7);
              } else {
                return setResult(0);
              }
            }
            if (planSixty) {
              if (getTime > 60) {
                return setResult((getTime - 60) * 2.7);
              } else {
                return setResult(0);
              }
            }
            if (planOneHundredTwenty) {
              if (getTime > 120) {
                return setResult((getTime - 120) * 2.7);
              } else {
                return setResult(0);
              }
            }
            break;
          default:
            break;
        }
        break;
      case '018':
        switch (ddd2) {
          case '011':
            if (notPlan) {
              return setResult(getTime * 1.9);
            }
            if (planThirty) {
              if (getTime > 30) {
                return setResult((getTime - 30) * 1.9);
              } else {
                return setResult(0);
              }
            }
            if (planSixty) {
              if (getTime > 60) {
                return setResult((getTime - 60) * 1.9);
              } else {
                return setResult(0);
              }
            }
            if (planOneHundredTwenty) {
              if (getTime > 120) {
                return setResult((getTime - 120) * 1.9);
              } else {
                return setResult(0);
              }
            }
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Form>
        <PhoneAndLocale>
          <select name="" id="" onChange={(e) => getValueDDD(e)}>
            <option value="">DDD</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
          <input
            type="text"
            placeholder="Número do telefone"
            mask="(011) 9/9999-5959"
          />
        </PhoneAndLocale>
        <Plans>
          <select name="" id="" onChange={(e) => getPlan(e)}>
            <option value="">Planos</option>
            <option value="0">Sem plano</option>
            <option value="30">Fale mais 30</option>
            <option value="60<">Fale mais 60</option>
            <option value="120">Fale mais 120</option>
          </select>
        </Plans>
        <PhoneAndLocaleDestiny>
          <select name="" id="" onChange={(e) => getValueDDDdestiny(e)}>
            <option value="">DDD</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
          <input
            type="text"
            placeholder="Número do destino"
            mask="(011) 9/9999-5959"
          />
        </PhoneAndLocaleDestiny>
        <TimeUsed>
          <input
            type="number"
            name=""
            id=""
            placeholder="Minutos usados"
            onChange={(e) => getTime(e)}
            value={paramsToCalc.time}
          />
          <button onClick={() => calcDestiny()}>Calcular Gasto</button>
        </TimeUsed>
      </Form>
      <DivResult>
        <TableResult>
          <thead>
            <tr>
              <th>SEM PLANO</th>
              <th>COM PLANO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formatPrice(resultCalc)}</td>
              <td>{formatPrice(resultCalc)}</td>
            </tr>
          </tbody>
        </TableResult>
      </DivResult>
    </Container>
  );
};

export default FormCall;
