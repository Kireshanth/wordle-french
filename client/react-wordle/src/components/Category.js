import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styles from './Category.module.css';

const Category = ({ setCategory }) => {
    const [theme, setTheme] = useState('colours');
    const history = useNavigate();

    const handleSubmit = (e) => {
            e.preventDefault();
            setCategory(theme);
            history('/play');
    }

    const handleClick = () => {
        history('/add');
    }

    return ( 
        <div className={styles.selectCat}>
            <div className={styles.container1}>
                    <h2 className={styles.title}><span className={styles.french1}>WO</span><span className={styles.french2}>RD</span><span className={styles.french3}>LÉ</span> 🥖</h2>
                    <p className={styles.about}>Learn French Vocab through repetition</p>
            </div>
            <div className={styles.container2}>
                <p class={styles.instructions}>Bonjour! Choose a word category and click <span className={styles.french1}>Play</span> or click <span className={styles.french3}>Add New Words</span> to list.</p>
                <div className={styles.container3}>
                    <form onSubmit={handleSubmit}>
                    <select value={theme} onChange={(e)=>setTheme(e.target.value)} name="categories" id={styles.categories} required>
                    <option value="colours">colours</option>
                    <option value="animals">animals</option>
                    </select>
                    <Button id={styles.play} type="submit" variant="primary">Play</Button>
                    </form>
                    <Button id={styles.addWords} onClick={handleClick} variant="primary">Add New Words</Button>
                </div>
            </div>
            <div id={styles.credit}>Built by <a target="_blank" href="https://github.com/kireshanth">Kireshanth 👨🏿‍💻</a></div>
        </div>
     );
}
 
export default Category;