import { useState } from 'react';

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0) // track # of turns user has had
    const [currentGuess, setCurrentGuess] = useState('') // track what the user is currently typing
    const [guesses, setGuesses] = useState([...Array(6)]) // creates an 6 element array with empty values ...each guess is an array --> includes color property for each letter
    const [history, setHistory] = useState([]) // each guess is a string --> raw text
    const [isCorrect, setIsCorrect] = useState(false) //true if user guesses correctly
    const [usedKeys, setUsedKeys] = useState({}) // {a: 'green', b: 'yellow', c: 'grey'}
    const guessLength = solution.length;

    //format a guess into an array of letter objects [{key: letter, color: yellow}]
    const formatGuess = () => {
        let solutionArray = [...solution] //convert solution string into an array of letters
        //convert current guess string into an array of letter objects
        let formattedGuess = [...currentGuess].map((l)=>{
            return {key: l, color: 'grey'}
        })  
        //find any green letters
        formattedGuess.forEach((l,i)=>{
            if(solutionArray[i] === l.key){
                formattedGuess[i].color = "green";
                //prevents double match (i.e if letter is found to be in correct spot, cant be turned yellow later)
                solutionArray[i] = null;
            }
        })
        //find any yellow letters
        formattedGuess.forEach((l,i)=>{
            if(solutionArray.includes(l.key) && l.color !== "green"){
                formattedGuess[i].color = "yellow";
                solutionArray[solutionArray.indexOf(l.key)] = null;
            }
        })
        return formattedGuess;
    }
    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        //if guess is correct, user won the game
        if(currentGuess === solution){
            setIsCorrect(true)
        }
        setGuesses((prevGuesses)=>{
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        })
        setHistory((prevHistory)=>{
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn)=>{
            return prevTurn + 1;
        })
        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys};
            formattedGuess.forEach((letter)=>{
                let currentColor = newKeys[letter.key]
                if(letter.color === "green"){
                    newKeys[letter.key] = 'green';
                    return;
                }
                if(letter.color === "yellow" && currentColor !== 'green'){
                    newKeys[letter.key] = "yellow"
                    return;
                }
                if(letter.color === "grey" && currentColor !== "yellow" && currentColor !== "green"){
                    newKeys[letter.key] = "grey"
                    return;
                }
            })
            return newKeys
        })
        setCurrentGuess('');
    }

    //handle keyup event & track current guess
    //if user presses enter, add the new guess
    const handleKeyup = ({ key }) => {
        if(key === "Enter"){
            //only add guess if turn is less than 5
            if(turn > 5){
                console.log("You used all your guesses");
                return
            }
            //do not allow duplicate words
            if(history.includes(currentGuess)){
                console.log("You already used that word");
                return
            }
            //check if word is 5 chars long
            if(currentGuess.length < guessLength){
                console.log("Guess must match solution length");
                return
            }
            const formatted = formatGuess()
            addNewGuess(formatted)
        }
        if(key === "Backspace"){
            setCurrentGuess((prev)=>{
                //set current guess state as current guess minus a letter
                return prev.slice(0,-1);
            })
            //exit out of function
            return 
        }
        //check if key pressed is a letter
        if(/^[a-zA-Z]$/.test(key)){
            //only add letter to currentGuess state IF currentGuess is < 5 letters
            if(currentGuess.length < guessLength){
                setCurrentGuess((prev) => {
                    return (prev + key).toLowerCase();
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys}
}

export default useWordle