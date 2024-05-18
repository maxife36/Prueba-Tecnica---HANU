import './Header.css'
import { type numberOfDecks, type deckRank} from '../../types'
import { SuitInput } from './SuitInput'
import { RankInput } from './RankInput'
import { ResetBtn } from './ResetBtn'

type Props = {
    deckNumberController: [numberOfDecks, React.Dispatch<React.SetStateAction<numberOfDecks>>]
    rankNumbersController: [deckRank, React.Dispatch<React.SetStateAction<deckRank>>]
    newGameController: [number, React.Dispatch<React.SetStateAction<number>>]
}

export function Header({deckNumberController, rankNumbersController, newGameController}:Props){

    return(
        <header className='header-container'>
            <SuitInput deckNumberController={deckNumberController}/>
            <RankInput rankNumbersController={rankNumbersController}/>
            <ResetBtn newGameController={newGameController}/>
        </header>
    )
}