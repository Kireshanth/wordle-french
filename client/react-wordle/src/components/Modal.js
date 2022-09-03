import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import styles from './Game.module.css';
import { useNavigate } from "react-router-dom";

export default function Modal({ isCorrect, turn, solution }){
    const history = useNavigate();

    const handleClick = () =>{
        history("/");
    }
    return(
        <div className={styles.modal}>
            {isCorrect && (
                <div>
                    <h1>GAGNEZ! 🏆</h1>
                    <p className={styles.solved}>{solution}</p>
                    <p>You found the solution in <span className={styles.turns}>{turn}</span> attempts!</p>
                    <Button onClick={handleClick} className={styles.btn}>Play Again</Button>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Unlucky! 😔</h1>
                    <p className={styles.solved}>{solution}</p>
                    <p>Better luck next time!</p>
                    <Button onClick={handleClick} className={styles.btn}>Play Again</Button>
                </div>
            )}
        </div>
    )
}