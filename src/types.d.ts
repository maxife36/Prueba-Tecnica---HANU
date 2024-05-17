export interface Card{
    suit: 'Heart' | 'Diamond' | 'Clover' | 'Spade',
    rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13,
    currentDeck: 0 | 1 | 2 | 3
    tableWidth: number
}

export type StyleType = {
    [key:string]:string
}
