import { useEffect, useState } from "react"
import styles from './Game.module.css';

export default function Keypad({ usedKeys }) {
    const [letters, setLetters] = useState(null);

    useEffect(()=>{
        setLetters(()=>{
        let keys = [ 
            {"key": "a"}, {"key": "b"}, {"key": "c"}, {"key": "d"},
            {"key": "e"}, {"key": "f"}, {"key": "g"}, {"key": "h"},
            {"key": "i"}, {"key": "j"}, {"key": "k"}, {"key": "l"},
            {"key": "m"}, {"key": "n"}, {"key": "o"}, {"key": "p"},
            {"key": "q"}, {"key": "r"}, {"key": "s"}, {"key": "t"},
            {"key": "u"}, {"key": "v"}, {"key": "w"}, {"key": "x"},
            {"key": "y"}, {"key": "z"}]
        return keys;
        })
    }, [])

    return (
        <div className={styles.keypad}>
            {letters && letters.map((letter)=>{
                let color = usedKeys[letter.key] //references colors stored in used keys (green, yellow, grey, or undefined)
                return(
                    <div key={letter.key} className={styles[color]}>{letter.key}</div>
                )
            })}
        </div>
    )
}