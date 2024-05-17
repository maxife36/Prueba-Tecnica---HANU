export type StyleType = {
    [key:string]:string
}

export type deckRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
export type deckSuit = 'Heart' | 'Diamond' | 'Clover' | 'Spade'
export type deckNumber = 0 | 1 | 2 | 3

export interface Card{
    suit: 'Heart' | 'Diamond' | 'Clover' | 'Spade',
    rank: deckRank
    tableWidth: number
    storageController: DecksLSHook
}

type cardId = `${deckRank}-${deckSuit}`
export type deckStructure = cardId[]

export type DecksLSHook = {
    deck0: DeckStructure;
    setDeck0: React.Dispatch<React.SetStateAction<DeckStructure>>;
    deck1: DeckStructure;
    setDeck1: React.Dispatch<React.SetStateAction<DeckStructure>>;
    deck2: DeckStructure;
    setDeck2: React.Dispatch<React.SetStateAction<DeckStructure>>;
    deck3: DeckStructure;
    setDeck3: React.Dispatch<React.SetStateAction<DeckStructure>>;
  };