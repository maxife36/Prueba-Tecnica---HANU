import "./Card.css";
import { type Card } from "../../types";

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

export function Card({ suit, rank }: Card) {
    
    const isFaceCard = !!FACE_CARDS[rank];

    const rankName: number | string = isFaceCard? FACE_CARDS[rank] : rank;
    
    const bodyIcon: number[] = new Array(isFaceCard? 1: rank).fill(0);
    
  return (
    <article className={`card-conatiner suit-${suit}`}>
      <div className="corner top-left">
        <span>{rankName}</span>
        <span>{SUIT[suit]}</span>
      </div>

      <div className={`card-body-container rank-${rankName}`}>
        {bodyIcon.map((_, index) =>(
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
