import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import logo from 'assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

export default function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  const rotas = [
    { label: 'Início', to: '/' },
    { label: 'Cardápio', to: '/cardapio' },
    { label: 'Sobre', to: '/sobre' }
  ];

  return (
    <nav className={styles.menu}>
      <img src={logo} alt="logo do restaurante Winther" width={120} />

      <button 
        className={styles.menu__toggle} 
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
      </button>

      <ul className={`${styles.menu__list} ${menuAberto ? styles.menu__list__aberto : ''}`}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to} onClick={() => setMenuAberto(false)}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
