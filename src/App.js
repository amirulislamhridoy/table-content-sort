import './App.css';
import TableComponent from './Component/TableComponent/TableComponent';
import tableTestData from './JsonStyleFiles/tableTestData.json';
import tableConfigMain from './JsonStyleFiles/TableConfigMain.json';
import tableTextData from './JsonStyleFiles/tableTestData.json';
import tableConfigFirst from './JsonStyleFiles/tableConfigFirst.json';
import tableConfigSecond from './JsonStyleFiles/tableConfigSecond.json';
import tableConfigThird from './JsonStyleFiles/TableConfigThird.json';

function App() {
  return (
    <div>
      <TableComponent data={tableTestData} tableConfig={tableConfigMain}></TableComponent>
      <TableComponent data={tableTextData} tableConfig={tableConfigFirst}></TableComponent>
      <TableComponent data={tableTextData} tableConfig={tableConfigSecond}></TableComponent>
      <TableComponent data={tableTextData} tableConfig={tableConfigThird}></TableComponent>
    </div>
  );
}
export default App;
