import React, {useState} from 'react'
import styles from './searchBar.module.css'
import { Search } from '../../images';

function SearchBar(){
    const [searchPizzeria, setSearchPizzeria] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        
    }
    return (
        <div className={styles.main_Menu}>
            <div className={styles.Container}>
            <input className={styles.search_Bar}
                type="text"
                placeholder='Procure a sua favorita'
                value={searchPizzeria}
                onChange={(e) => setSearchPizzeria(e.target.value)}
            
            />
          <button className={styles.search_Button}><img className={styles.search_Img} src={Search} /> </button>
           </div>
        </div>

    )
}

export default SearchBar

