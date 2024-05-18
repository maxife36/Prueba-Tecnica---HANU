import { type numberOfDecks } from "../../types";


type Props = {
    deckNumberController: [numberOfDecks, React.Dispatch<React.SetStateAction<numberOfDecks>>]
}

export function SuitInput({ deckNumberController }: Props) {

  function handleSuitInput(e: React.ChangeEvent<HTMLInputElement>) {
    const inputElement = e.currentTarget
    const inputValue = Number(inputElement.value) as numberOfDecks
    deckNumberController[1](inputValue)
  }

  return (
    <section className="suits-container">
      <p className="suit-title">Numero de Barajas</p>
      <div className="suit-option">
        <label htmlFor="">
          3
          <input type="radio" name="deckNumber" value={3} checked={deckNumberController[0] === 3? true: false } onChange={handleSuitInput} />
        </label>
        <label htmlFor="">
          4
          <input type="radio" name="deckNumber" value={4} checked={deckNumberController[0] === 4? true: false } onChange={handleSuitInput} />
        </label>
      </div>
    </section>
  );
}
