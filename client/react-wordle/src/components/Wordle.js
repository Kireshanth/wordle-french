import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle';
import Grid from './Grid'
import Keypad from './Keypad';
import Modal from './Modal';
import styles from './Game.module.css';

export default function Wordle({ solution }){
    const { currentGuess , handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution) //exporting values from useWordle hook
    const [showModal, setShowModal] = useState(false);
    useEffect(()=>{
        window.addEventListener('keyup', handleKeyup)
        //if user wins, detached event listener -- stop tracking keys
        if(isCorrect){
            setTimeout(()=> setShowModal(true), 2000)
            console.log('Congrats, you win!')
            window.removeEventListener('keyup', handleKeyup)
        }
        if(turn > 5){
            setTimeout(()=> setShowModal(true), 2000)
            console.log(`Unlucky, out of guesses! Word : ${solution}`)
            window.removeEventListener('keyup', handleKeyup)
        }
        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    return(
        <>
        <div className={styles.layout2}>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} guessLength={solution}/>
            <Keypad usedKeys={usedKeys}/>
        </div>
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </>
    )
}