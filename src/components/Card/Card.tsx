import "./Card.css";
import { type Card, type deckNumber, type cardId, type DeckStructure, type numberOfDecks } from "../../types";
import { useState } from "react";

const SUIT = {
  Heart: "♥",
  Diamond: "♦",
  Clover: "♣",
  Spade: "♠",
};

const FACE_CARDS: { [key: string]: string } = {
  "1": "A",
  "11": "J",
  "12": "Q",
  "13": "K",
};

export function Card({ suit, rank, tableWidth, storageController }: Card) {
  const [currentDeck, setCurrentDeck] = useState<deckNumber>(0 as deckNumber);
  // const [isComplete, setIsComplete] = useState<boolean>(false)

  const isFaceCard = !!FACE_CARDS[rank];

  const rankName: number | string = isFaceCard ? FACE_CARDS[rank] : rank;

  const bodyIcon: number[] = new Array(isFaceCard ? 1 : rank).fill(0);

  const width: number = tableWidth / 6;

  const containerStyle = {
    width: `${width}px`,
    height: `${width * 1.4}px`,
    padding: `${width * 0.21}px ${width * 0.16}px`,
    fontSize: `${width * 0.035}px`,
  };

  function handlerOnClick(e: React.MouseEvent<HTMLDivElement>) {
    const { deck0, setDeck0, deck1, setDeck1, deck2, setDeck2, deck3, setDeck3, deckNumbers } = storageController;

    function updateControlls(deckNum: deckNumber): [DeckStructure, React.Dispatch<React.SetStateAction<DeckStructure>>] {
      let deck: DeckStructure = [...deck0];
      let setDeck: React.Dispatch<React.SetStateAction<DeckStructure>> = setDeck0;

      if (deckNum === 1) {
        deck = [...deck1];
        setDeck = setDeck1;
      } else if (deckNum === 2) {
        deck = [...deck2];
        setDeck = setDeck2;
      } else if (deckNum === 3) {
        deck = [...deck3];
        setDeck = setDeck3;
      }
      return [deck, setDeck];
    }

    const resetDeckPosition: boolean = (deckNumbers === 3 && currentDeck >= 2) || (deckNumbers === 4 && currentDeck >= 3);

    /* Elimino la posicion inicial del naipe */
    const [initDeck, initSetDeck] = updateControlls(currentDeck);
    const cardID: cardId = initDeck.pop();
    initSetDeck(initDeck);

    /* Cambio de Deck al naipe - Actualizo currentDeck*/
    const finalDeckNumber = resetDeckPosition ? 0 : ((currentDeck + 1) as deckNumber);
    setCurrentDeck(finalDeckNumber);

    /* Actualizo la posicion Final del naipe */
    const [finalDeck, finalSetDeck] = updateControlls(finalDeckNumber);
    finalDeck.push(cardID);
    finalSetDeck(finalDeck);

    /* Modifico posicion sobre el deck */
    e.currentTarget.style.zIndex = `${finalDeck.length - 1}`;
  }

  return (
    <article className={`card-conatiner suit-${suit} deck-${currentDeck}`} style={containerStyle} onClick={handlerOnClick}>
      <div className="corner top-left">
        <span>{rankName}</span>
        <span>{SUIT[suit]}</span>
      </div>

      <div className={`card-body-container rank-${rankName}`}>
        {bodyIcon.map((_, index) => (
          <div key={`${suit}-${index}`} className={`bodyIcon`}>
            {SUIT[suit]}
          </div>
        ))}
      </div>

      <div className="corner bottom-right">
        <span>{rankName}</span>
        <span>{SUIT[suit]}</span>
      </div>
    </article>
  );
}
