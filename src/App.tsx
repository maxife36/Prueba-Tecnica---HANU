import "./App.css";
import { Table } from "./components/Table/Table";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { useDeksLocalStorage } from "./hooks/useDeksLocalStorage";
import { type DecksLSHook, type numberOfDecks, type DeckStructure, type deckRank, type deckSuit, type cardId } from "./types";
import { useState, useEffect, useRef } from "react";

function completeVerify(alldecks: DeckStructure[], decknum: numberOfDecks): boolean {
  let completeFlag: boolean = true;

  for (const [index, deck] of alldecks.entries()) {
    if (index <= decknum - 1) {
      if (!deck.length) completeFlag = false;

      const refSuit = [...deck][0]?.split("-")[1];

      for (const card of deck) {
        const currentCardSuit = card?.split("-")[1];
        if (currentCardSuit !== refSuit) {
          completeFlag = false;
        }
      }

      if (completeFlag) {
        const sortedDeck = [...deck].sort((a, b) => (a < b ? 1 : -1));

        const areEqual = JSON.stringify(sortedDeck) === JSON.stringify([...deck]);

        completeFlag = areEqual ? true : false;
      }
    }
  }

  return completeFlag;
}

function shuffleArray(array: DeckStructure): DeckStructure {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const SUIT_OPTIONS: { [key: string]: deckSuit[] } = {
  "3": ["Heart", "Diamond", "Spade"],
  "4": ["Heart", "Diamond", "Spade", "Clover"],
};

function App() {
  const [tableWidth, setTableWidth] = useState(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [newDeck, setNewDeck] = useState<DeckStructure>([]);
  const newGameController = useState<number>(1);
  const deckNumberController = useState<numberOfDecks>(3);
  const rankNumbersController = useState<deckRank>(4);

  const initDeck: DeckStructure = [];

  const storageController: DecksLSHook = useDeksLocalStorage(initDeck, deckNumberController[0]);

  useEffect(() => {
    const { deck0, deck1, deck2, deck3, deckNumbers } = storageController;
    const result = completeVerify([deck0, deck1, deck2, deck3], deckNumbers);
    setIsComplete(result);
  }, [storageController]);

  const previousNewGame = useRef<number>(newGameController[0]);

  useEffect(() => {
    if (previousNewGame.current !== newGameController[0]) {
      previousNewGame.current = newGameController[0];
      const suitOptions = SUIT_OPTIONS[deckNumberController[0] || 3];
      const rankOptions: deckRank[] = Array.from({ length: rankNumbersController[0] }, (_, index) => (index + 1) as deckRank);

      // const shuffledSuit = shuffleArray(suitOptions) as deckSuit[];
      // const shuffledRank = shuffleArray(rankOptions) as deckRank[];

      const newInitialDeck: DeckStructure = [];

      for (const suit of suitOptions) {
        for (const rank of rankOptions) {
          const cartId: cardId = `${rank}-${suit}`;
          newInitialDeck.push(cartId);
        }
      }

      setNewDeck(shuffleArray(newInitialDeck) as DeckStructure);
      
      const { setInitialDeck } = storageController;
      setInitialDeck(newInitialDeck);
    }
  }, [newGameController[0]]);

  return (
    <>
      <Header deckNumberController={deckNumberController} rankNumbersController={rankNumbersController} newGameController={newGameController} />
      <Table deckNumbers={deckNumberController[0]} setTableWidth={setTableWidth}>
        {newDeck.map((cardId, index) => {
          const cardInfo = cardId?.split("-");

          return <Card key={`${cardId}-${index}`} suit={cardInfo[1] as deckSuit} rank={Number(cardInfo[0]) as deckRank} tableWidth={tableWidth} storageController={storageController} zIndex={index} />;
        })}
      </Table>
      <Banner isComplete={isComplete}/>
    </>
  );
}

export default App;
