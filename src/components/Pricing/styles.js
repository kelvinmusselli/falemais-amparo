import styled from 'styled-components';

export const Container = styled.div``;

export const TableData = styled.table`
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
      color: rgba(0, 0, 0, 0.87);
      font-weight: bold;
      line-height: 1.5rem;
      display: table-cell;
      padding: 16px;
      font-size: 0.875rem;
      text-align: left;
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
        text-align: left;
        color: #888888;
        font-weight: bold;
        line-height: 1.5;
        border-bottom: 1px solid rgba(224, 224, 224, 1);
        letter-spacing: 0.01071em;
        vertical-align: inherit;
      }
    }
  }
`;
