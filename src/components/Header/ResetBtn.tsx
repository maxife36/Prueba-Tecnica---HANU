type Props = {
    newGameController: [number, React.Dispatch<React.SetStateAction<number>>]
}

export function ResetBtn({newGameController}:Props){

    function handlerNewGAme(){

        const nextGame = newGameController[0] + 1
        newGameController[1](nextGame) 
    }

    return(
        <section className='reset-btn-container'>
            <button type="button" onClick={handlerNewGAme}>
                Nuevo Juego
            </button>
        </section>
    )
}