import "./Card.css";
import { type Card, type deckNumber } from "../../types";
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

  function handlerOnClick() {
    const { deck0, setDeck0, deck1, setDeck1, deck2, setDeck2, deck3, setDeck3 } = storageController;

    if (currentDeck >= 2) {
      setCurrentDeck(0);
    } else {
      setCurrentDeck((currentDeck + 1) as deckNumber);
    }


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
