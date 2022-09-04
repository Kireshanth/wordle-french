import { useEffect, useState } from "react";
import Wordle from "./Wordle";
import styles from './Game.module.css';

function Game({ category, words }) {
  const [solution, setSolution] = useState(null);
  const [imgURL, setImgUrl] = useState(null);
  const [newGame, setNewGame] = useState(false);

  let filterWords = words.filter(word=>word['category'] === category)

  useEffect(() => {
      let randomSolution = filterWords[Math.floor(Math.random() * filterWords.length)];
      setSolution(randomSolution);
  }, [newGame])

  useEffect(()=> {
    if(solution){
      imageSearch();
    } 
  }, [solution])


  const imageSearch = () => {
  fetch(`https://api.pexels.com/v1/search?query=${solution['english']}&per_page=1`, {
    headers: {
      Authorization: "563492ad6f91700001000001bd3bc827d8e24fbeb901f5aacd19cac0"
    }
  })
  .then(res=> res.json())
  .then(data=>{
    setImgUrl(data.photos[0]['src']['original']);
    console.log(imgURL);
  })
}

  return (
    <div className={styles.App}>
      {newGame && <p style={{color: "white"}}>Game On</p>}
      <h1><span className={styles.french1}>WO</span><span className={styles.french2}>RD</span><span className={styles.french3}>LÉ</span></h1>
      {/* Will check if solution is not null before printing it out */}
      <div className={styles.layout}>
        <div className={styles.layout3}>
        {imgURL && <img src={imgURL} className={styles.image}/>}
        </div>
        {imgURL && solution && <Wordle solution={solution['french']} setNewGame={setNewGame}/>}
      </div>
    </div>
  );
}

export default Game

/* 

data we need to track:
  -- solution
    -- 5 letter string, e.g. 'drain'
  -- past guesses
    -- an array of past guesses
    -- each past guess is an array of letter objects [{}, {}, {}, {}, {}]
    -- each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
  -- current guess
    -- string 'hello'
  -- keypad letters
    -- array of letter objects [{key: 'a', color: 'green'}, {}, {} ...]
  -- number of turns
    -- an integer 0 - 6

game process:
  -- entering words:
    -- user enters a letter & a square is filled with that letter
    -- when a user hits delete it deletes the previous letter
    -- when a user hits enter it submits the word
      -- if all squares are not filled with letters then the word is not submitted
      -- if that word has already been used in a prev guess then the word is not submitted
  -- checking submitted words:
    -- each letter is checked to see if it matches to the solution
    -- each letter is assigned a color based on it's inclusion in the solution
      -- exact matches (correct position in the solution) are green
      -- partial matches (in the solution but not the correct position) are yellow
      -- none-matches (not in the solution at all) are grey
    -- the guess is added the grid with the correct colors
    -- the current guess moves to the next row
    -- the keypad letters are updated (colors)
  -- ending the game:
    -- when the guessed word fully matches the solution
      -- modal to say 'well done'
    -- when the user runs out of guesses
      -- modal to say 'unlucky'

*/