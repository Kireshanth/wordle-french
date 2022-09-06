import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styles from './Category.module.css';

const Category = ({ categoryList, setCategory }) => {
    const [theme, setTheme] = useState('colours');
    const history = useNavigate();

    const handleSubmit = (e) => {
            e.preventDefault();
            setCategory(theme);
            history('/play');
    }

    const handleAdd = () => {
        history('/add');
    }

    const handleDelete = () => {
        history('/delete');
    }

    return ( 
        <div className={styles.selectCat}>
            <div className={styles.container1}>
                    <h2 className={styles.title}><span className={styles.french1}>WO</span><span className={styles.french2}>RD</span><span className={styles.french3}>LÉ</span><span className={styles.french4} >🥖</span></h2>
                    <p className={styles.about}>A better way to learn French Vocab</p>
            </div>
            <div className={styles.container2}>
                <p class={styles.instructions}>Bonjour! Choose a word category and click <span className={styles.french1}>Play</span> to start.</p>
                <div className={styles.container3}>
                    <form onSubmit={handleSubmit}>
                    <select value={theme} onChange={(e)=>setTheme(e.target.value)} name="categories" id={styles.categories} required>
                    {categoryList && categoryList.map((cat, i) => <option key={i} value={cat} >{cat}</option>)}
                    </select>
                    <Button id={styles.play} type="submit" variant="primary">Play</Button>
                    </form>
                    <Button className={`${styles.btn} ${styles.addWords}`} onClick={handleAdd} variant="primary">Add New Words</Button>
                    <Button className={`${styles.btn} ${styles.deleteWords}`} onClick={handleDelete} variant="primary">Delete Words</Button>
                </div>
            </div>
            <div id={styles.credit}>Built by <a target="_blank" href="https://github.com/kireshanth">Kireshanth 👨🏿‍💻</a></div>
        </div>
     );
}
 
export default Category;