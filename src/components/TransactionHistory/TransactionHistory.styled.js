
import styled from 'styled-components';
export const Table = styled.table`

table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid aliceblue;
  background-color:bisque;
`
export const TableTitles = styled.thead`
background-color:lightblue;`

export const TrTable = styled.tr`
text-align: center;
:nth-child(odd) {
  background-color: grey;
}
:nth-child(even) {
  background-color: white;
}`