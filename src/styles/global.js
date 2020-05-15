import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: #fff;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

input{
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

select{
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

table{
  min-width: 260px;
  width: 100%;
  display: table;
  border-spacing: 0;
  border-collapse: collapse;

  thead {
    display: table-header-group;
    tr {
      color: inherit;
      display: table-row;
      outline: 0;
      vertical-align: middle;
    }
    th {
      text-align: center;
      color: rgba(0, 0, 0, 0.87);
      font-weight: bold;
      line-height: 1.5rem;
      display: table-cell;
      padding: 16px;
      font-size: 0.875rem;
      border-bottom: 1px solid rgba(224, 224, 224, 1);
      letter-spacing: 0.01071em;
      vertical-align: inherit;
    }
  }

  tbody {
    display: table-row-group;
    tr {
      color: inherit;
      display: table-row;
      outline: 0;
      vertical-align: middle;
      td {
        display: table-cell;
        padding: 16px;
        font-size: 0.875rem;
        text-align: center;
        color: #888888;
        font-weight: bold;
        line-height: 1.5;
        border-bottom: 1px solid rgba(224, 224, 224, 1);
        letter-spacing: 0.01071em;
        vertical-align: inherit;
      }
    }
  }
}

`;
