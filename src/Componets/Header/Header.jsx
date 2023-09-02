import styles from './Header.module.scss';
import { header } from '@/constants';
import CreditCardComponent from './creditCard';

const Header =  () => {
const {caption,title,subtitle} = header;

    return <header className={styles.header}>
        <div className={styles.conteiner}>
            <div className={styles.contant}>
                <span>{caption}</span>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <div>
                <CreditCardComponent/>
            </div>
        </div>
    </header>;    
};

export default  Header;