import "./App.css";
import {Table} from './components/Table/Table'
import {Card} from './components/Card/Card'
import { useDeksLocalStorage } from "./hooks/useDeksLocalStorage";
import {type DecksLSHook} from './types'
import { useState} from "react";

function App() {

  const [tableWidth, setTableWidth] = useState(0)
  const storageController : DecksLSHook = useDeksLocalStorage(['1-Heart', '2-Heart', '3-Clover'])

  return (
    <>
      <Table deckNumbers ={3} setTableWidth={setTableWidth}>
        <Card suit="Heart" rank={8} tableWidth={tableWidth} storageController={storageController}/>
        <Card suit="Heart" rank={10} tableWidth={tableWidth} storageController={storageController}/>
        <Card suit="Heart" rank={1} tableWidth={tableWidth} storageController={storageController}/>
      </Table>
    </>
  );
}

export default App;
