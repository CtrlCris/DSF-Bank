import { navLinks } from '@/constants';
import styles from './NavBar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const NavBar =  () => {

    const renderLinks = navLinks.map((link,i) => (
       <li key={i}>
            <a href={link.url}>{link.name}</a>
       </li>
    ))
    return <section className={styles.navbar}>
        <div>
            <Link rel="stylesheet" href="/">
                <Image  src="./logo.svg" alt="DSF Logo" width={50} height={30}/>
            </Link>        
            
        </div>
        <nav>
            <ul className={styles.links}>{renderLinks}</ul>
        </nav>
    </section>;    
};

export default  NavBar;