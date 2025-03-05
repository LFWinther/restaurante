import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import logo from 'assets/logo.png';

export default function Menu() {
  const rotas = [
    {
      label: 'Início',
      to: '/'
    },
    {
      label: 'Cardapio',
      to: '/cardapio'
    },
    {
      label: 'Sobre',
      to:'/sobre'
    }
  ];
  return (
    <nav className={styles.menu}>
      <img src={logo} alt='logo do restaurante Winther' width={120} />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}