import React from 'react';
import Mapa from '../index'
import styles from './Localizacao.module.scss';

const Localizacao: React.FC = () => {
  return (
    <div className={styles.localizacao} >
      <h2 className={styles.localizacao__texto}>Onde Estamos</h2>
      <Mapa/>
    </div>
  );
};

export default Localizacao;
