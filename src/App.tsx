import "./App.css";
import {Table} from './components/Table/Table'
import {Card} from './components/Card/Card'
import { useDeksLocalStorage } from "./hooks/useDeksLocalStorage";
import {type DecksLSHook, type numberOfDecks,  type DeckStructure} from './types'
import { useState, useEffect} from "react";

function completeVerify(alldecks: DeckStructure[], decknum: numberOfDecks): boolean {
  let completeFlag: boolean = true;
  
  for (const [index, deck] of alldecks.entries()) {
    
    if (index <= (decknum-1)) {  
      if(!deck.length) completeFlag = false;
      
      const refSuit = [...deck][0]?.split("-")[1];
      
      for (const card of deck) {
        const currentCardSuit = card?.split("-")[1];
        if (currentCardSuit !== refSuit) {
          completeFlag = false;
        }
      }

      if (completeFlag) {
        const sortedDeck = [...deck].sort((a, b) =>  a < b ? 1 : -1);
          
        const areEqual = JSON.stringify(sortedDeck) === JSON.stringify([...deck]);

        completeFlag = areEqual? true: false
      }

    }
  }
  console.log(completeFlag);
  
  return completeFlag;
}

function App() {

  const deckNumbers: numberOfDecks = 3
  const initialDeck: DeckStructure = ['1-Heart', '2-Heart', '3-Clover']

  const [tableWidth, setTableWidth] = useState(0)
  const storageController : DecksLSHook = useDeksLocalStorage(initialDeck,deckNumbers)
  const [isComplete, setIsComplete] = useState<boolean>(false)

  useEffect(()=>{
    const { deck0, deck1, deck2, deck3, deckNumbers } = storageController;
    const result = completeVerify([deck0,deck1,deck2,deck3], deckNumbers)    
    setIsComplete(result)
    
  },[storageController])

  return (
    <>
      <Table deckNumbers ={deckNumbers} setTableWidth={setTableWidth}>
        <Card suit="Heart" rank={1} tableWidth={tableWidth} storageController={storageController}/>
        <Card suit="Heart" rank={2} tableWidth={tableWidth} storageController={storageController}/>
        <Card suit="Clover" rank={3} tableWidth={tableWidth} storageController={storageController}/>
      </Table>
    </>
  );
}

export default App;
