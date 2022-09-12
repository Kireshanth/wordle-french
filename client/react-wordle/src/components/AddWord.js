import { useState } from 'react';
import styles from './AddWord.module.css'

function AddWord() {

    const[english, setEnglish] = useState("");
    const[french, setFrench] = useState("");
    const[category, setCategory] = useState("");
    const[deleteMessage, setdeleteMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const word = {english, french, category};
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(word)
        }).then(()=>{
            setdeleteMessage(true);
            setTimeout(()=>{setdeleteMessage(false)}, 3000);
        })
    }

    return(
        <div className={styles.create}>
            <h1 className={styles.title}>Add New Words into vocabulary!</h1>
            <div>
                <form onSubmit={handleSubmit}>
                <label>Enter word in English</label>
                <input type="text" value={english} onChange={(e)=>{setEnglish(e.target.value)}} required></input>
                <label>Enter word in French</label>
                <input type="text" value={french} onChange={(e)=>{setFrench(e.target.value)}} required></input>
                <label>Select word category</label>
                <input type="text" value={category} onChange={(e)=>{setCategory(e.target.value.toLowerCase())}} required></input>
                {/* <select name="categories" value={category} onChange={(e)=>{setCategory(e.target.value)}} id="categories" required>
                {categoryList && categoryList.map((cat, i) => <option key={i} value={cat} >{cat}</option>)}
                </select> */}
                <button>Add word</button>
                {deleteMessage && <div id={styles.message}>Word added to database!</div>}
                </form>
            </div>
        </div>
    )
}

export default AddWord;