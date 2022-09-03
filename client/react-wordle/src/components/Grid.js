import Row from './Row';

export default function Grid({currentGuess, guesses, turn, guessLength}) {
    return(
        <div>{ guesses.map((guess, i)=>{
            if(turn === i){
                return <Row key={i} currentGuess={currentGuess} guessLength={guessLength} />
            }
            //printing 6 rows on the screen
            return <Row key={i} guess={guess} guessLength={guessLength}/>
        })}</div>
    )
}