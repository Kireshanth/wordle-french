import { useState } from 'react';
import styles from './AddWord.module.css'

function AddWord() {

    const[english, setEnglish] = useState("");
    const[french, setFrench] = useState("");
    const[category, setCategory] = useState("animals");

    const handleSubmit = (e) => {
        e.preventDefault();
        const word = {english, french, category};
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(word)
        }).then(()=>{
            console.log('word added to database!');
        })
    }

    return(
        <div className={styles.create}>
            <h1 className={styles.title}>Add New Words into the list!</h1>
            <div>
                <form onSubmit={handleSubmit}>
                <label>Enter word in English</label>
                <input type="text" value={english} onChange={(e)=>{setEnglish(e.target.value)}} required></input>
                <label>Enter word in French</label>
                <input type="text" value={french} onChange={(e)=>{setFrench(e.target.value)}} required></input>
                <label>Select word category</label>
                <select name="categories" value={category} onChange={(e)=>{setCategory(e.target.value)}} id="categories" required>
                <option value="colours">colours</option>
                <option value="animals">animals</option>
                <option value="food">food</option>
                <option value="emotions">emotions</option>
                </select>
                <button>Add word</button>
                </form>
            </div>
        </div>
    )
}

export default AddWord;