import styles from './Game.module.css';

export default function Row({ guess, currentGuess, guessLength }) {
    //if guess exists, return guess
    if(guess){
     return(
        <div className={`${styles.row} ${styles.past}`}>
            {guess.map((letter, i)=>(
                <div key={i} className={styles[letter.color]}>{letter.key}</div>
            ))}
        </div>
     )
    }

    if(currentGuess){
        let letters = currentGuess.split("");
        return(
            <div class={`${styles.row} ${styles.current}`}>
                {letters.map((letter, i)=>(
                  <div key={i} className={styles.filled}>{letter}</div>  
                ))}
                {[...Array(guessLength.length - letters.length)].map((_,i)=>(
                    <div key={i}></div>
                ))}
            </div>
        )
    }
    //return empty row
    const squares = [];
    for(let i = 0; i < guessLength.length; i++){
        squares.push(<div></div>)
    }
    return(
        <div className={styles.row}>
            {squares}
        </div>
    )
}