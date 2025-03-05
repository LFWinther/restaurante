import React from 'react';
import styles from './PaginaPadrao.module.scss';
import {Outlet} from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

export default function PaginasPadrao({children}: {children?: React.ReactNode}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Aqui, cada prato é uma nevasca de sabor!
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet/> 
        {children}
      </div>
    </>
  );
}