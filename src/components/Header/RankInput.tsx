import { useEffect } from "react";
import { type deckRank } from "../../types";

const FACE_CARDS: { [key: string]: string } = {
  "1": "A",
  "11": "J",
  "12": "Q",
  "13": "K",
};

type Props = {
  rankNumbersController: [deckRank, React.Dispatch<React.SetStateAction<deckRank>>];
};

export function RankInput({ rankNumbersController }: Props) {
  function handleRankInput(e: React.ChangeEvent<HTMLInputElement>) {
    const inputElement = e.currentTarget;
    const inputValue = Number(inputElement.value) as deckRank;
    rankNumbersController[1](inputValue);

    const isFaceCard = !!FACE_CARDS[inputValue];
    const rankName: number | string = isFaceCard ? FACE_CARDS[inputValue] : inputValue;

    const labelElement = inputElement.nextSibling;

    if (labelElement && labelElement instanceof HTMLLabelElement) {
      labelElement.textContent = rankName.toString();
    }
  }

  useEffect(() => {
    const labelElement = document.querySelector(".ranks-container label");

    const isFaceCard = !!FACE_CARDS[rankNumbersController[0]];
    const rankName: number | string = isFaceCard ? FACE_CARDS[rankNumbersController[0]] : rankNumbersController[0];

    if (labelElement && labelElement instanceof HTMLLabelElement) {
      labelElement.textContent = rankName.toString();
    }
  }, []);

  return (
    <section className="ranks-container">
      <p className="rank-title">Numeros de Cartas</p>
      <div className="rank-option">
        <input type="range" min="1" max="13" step="1" value={rankNumbersController[0]} onChange={handleRankInput} />
        <label htmlFor=""></label>
      </div>
    </section>
  );
}
