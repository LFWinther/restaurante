import styles from './Footer.module.scss';
import logo from 'assets/logo.png';

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <img src={logo} alt='logo do restaurante Winther' width={120} />
    </footer>
  );
}