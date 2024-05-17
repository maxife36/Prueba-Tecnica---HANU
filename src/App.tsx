import "./App.css";
import {Table} from './components/Table/Table'
import {Card} from './components/Card/Card'
import { useState } from "react";

function App() {

  const [tableWidth, setTableWidth] = useState(0)

  return (
    <>
      <Table deckNumbers ={3} setTableWidth={setTableWidth}>
        <Card suit="Heart" rank={8} currentDeck={0} tableWidth={tableWidth}/>
        <Card suit="Heart" rank={10} currentDeck={1} tableWidth={tableWidth}/>
        <Card suit="Heart" rank={1} currentDeck={2} tableWidth={tableWidth}/>
      </Table>
    </>
  );
}

export default App;
