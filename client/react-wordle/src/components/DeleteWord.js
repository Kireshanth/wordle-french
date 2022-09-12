import { useState } from 'react';
import styles from './DeleteWord.module.css'

function DeleteWord({ categoryList }) {

    const[english, setEnglish] = useState("");
    const[category, setCategory] = useState("");
    const[showMessage, setShowMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const word = {english, category};
        
        fetch("/", {
            method: "DELETE",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(word)
        }).then(()=>{
            setShowMessage(true);
            setTimeout(()=>{setShowMessage(false)}, 3000);
        })
    }

    return(
        <div className={styles.create}>
            <h1 className={styles.title}>Remove word from vocabulary</h1>
            <div>
                <form onSubmit={handleSubmit}>
                <label>Enter word in English</label>
                <input type="text" value={english} onChange={(e)=>{setEnglish(e.target.value)}} required></input>
                <label>Select word category</label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)} name="categories" id={styles.categories} required>
                    {categoryList && categoryList.map((cat, i) => <option key={i} value={cat} >{cat}</option>)}
                </select>
                <button>Delete Word</button>
                {showMessage && <div id={styles.message}>Deleted the word from the database</div>}
                </form>
            </div>
        </div>
    )
}

export default DeleteWord;