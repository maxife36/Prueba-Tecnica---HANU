import "./App.css";
import {Table} from './components/Table/Table'
import {Card} from './components/Card/Card'
import { useDeksLocalStorage } from "./hooks/useDeksLocalStorage";
import {type DecksLSHook, type numberOfDecks,  type deckStructure} from './types'
import { useState} from "react";

function App() {

  const deckNumbers: numberOfDecks = 3
  const initialDeck: deckStructure = ['1-Heart', '2-Heart', '3-Clover']

  const [tableWidth, setTableWidth] = useState(0)
  const storageController : DecksLSHook = useDeksLocalStorage(initialDeck,deckNumbers)

  return (
    <>
      <Table deckNumbers ={deckNumbers} setTableWidth={setTableWidth}>
        <Card suit="Heart" rank={8} tableWidth={tableWidth} storageController={storageController}/>
        <Card suit="Heart" rank={10} tableWidth={tableWidth} storageController={storageController}/>
        <Card suit="Heart" rank={1} tableWidth={tableWidth} storageController={storageController}/>
      </Table>
    </>
  );
}

export default App;
