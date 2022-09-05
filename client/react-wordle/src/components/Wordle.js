import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle';
import Grid from './Grid'
import Keypad from './Keypad';
import Modal from './Modal';
import styles from './Game.module.css';



export default function Wordle({ solution, setNewGame }){
    const { currentGuess , handleKeyup, guesses, isCorrect, turn, usedKeys, setTurn, setCurrentGuess, setGuesses, setHistory, setIsCorrect, setUsedKeys} = useWordle(solution) //exporting values from useWordle hook
    const [showModal, setShowModal] = useState(false);
    function timer(){
        setTimeout(()=>setShowModal(true), 1000)
    }
    useEffect(()=>{
        window.addEventListener('keyup', handleKeyup)
        //if user wins, detached event listener -- stop tracking keys
        console.log(guesses, isCorrect, turn, usedKeys);
        if(isCorrect){
            timer()
            window.removeEventListener('keyup', handleKeyup)
            clearTimeout(timer);
        }
        if(turn > 5){
            timer()
            window.removeEventListener('keyup', handleKeyup)
            clearTimeout(timer);
        }
        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    return(
        <>
        <div className={styles.layout2}>
            <p style={{color: "white"}}>{solution}</p>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} guessLength={solution}/>
            <Keypad usedKeys={usedKeys}/>
        </div>
        {showModal && <Modal setShowModal={setShowModal} handleKeyup={handleKeyup} isCorrect={isCorrect} turn={turn} solution={solution} setNewGame={setNewGame} setTurn={setTurn} setCurrentGuess={setCurrentGuess} setGuesses={setGuesses} setHistory={setHistory} setIsCorrect={setIsCorrect} setUsedKeys={setUsedKeys}/>}
        </>
    )
}