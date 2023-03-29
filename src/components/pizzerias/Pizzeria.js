import PizzaShop from "./model/PizzeriaModel";
import { Banner } from "../../images";
import styles from './pizzeria.module.css'

/*
Este bloco será responsável por armazenar e mostrar os dados das pizzarias
*/
const Pizzeria = () => {
    const pizzeria = [
        new PizzaShop('1', Banner, 'Pizzaria Matex', '32 Avaliações', 'Brasileira', 'Média', '20-30'),     
        
        new PizzaShop('2', Banner, 'Pizzaria Erivax', '20 Avaliações', 'Italiana', 'Broto', '10-20'),

        new PizzaShop('3', Banner, 'Pizzaria Cairo', '45 Avaliações', 'Italiana', 'Giga', '25-35')
    ];

    return (
        <ul className={styles.pizzerias}> 
            {pizzeria.map((data) => (
                <div className={styles.pizzerias_Container}>
                <li key={data.id}>
                    <img src={data.image} alt='Imagem da pizzaria'/>
                    <p className={styles.pizzerias_Name}>{data.name}</p>
                    <p className={styles.pizzerias_Rank}>{data.rank}</p>
                    <p className={styles.pizzerias_Type}>{data.type}</p>
                    <p className={styles.pizzerias_Size}>{data.size}</p>
                    <p className={styles.pizzerias_Time}>{data.time}</p>
                </li>
                </div>
            ))}
        </ul>
    )
}

export default Pizzeria