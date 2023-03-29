import styles from './home.module.css';
import SearchBar from './SearchBar';
import { AppStore, BannerHome, GoogleStore } from '../../images';
import Pizzeria from '../pizzerias/Pizzeria';

function Pizzerias (){
    return (
        <div>
            <div>
                <div className={styles.banner_Pizzerias} src={BannerHome} alt="Banner principal da página"></div>
                <div className={styles.banner_Text}>Pegue uma fatia</div>
                <img className={styles.app_Store} src={AppStore} alt="imagem para download no App Store" />
                <img className ={styles.app_Google} src={GoogleStore} alt="imagem para download no Google Store" />
            </div>

            < SearchBar />

            <div>
                <p className={styles.Cardapio}>NOSSO CARDÁPIO</p>
                <div className={styles.div_Container}>
                <p>Todas </p>
                <p>Brasileiras </p>
                <p>Italianas </p>
                </div>
            </div>

            <div>
                <p className={styles.Populares}>POPULARES</p>
                < Pizzeria />
            </div>
        </div>
    )


}

export default Pizzerias