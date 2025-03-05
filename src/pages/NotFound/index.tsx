import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import error from 'assets/404.webp';
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
  const navigate = useNavigate();
  return(
    <div className={`${styles.container} ${stylesTema.container}`} >
      <div className={styles.voltar}>
        <button onClick={() =>navigate(-1)}>
          ◀ Votlar
        </button>
      </div>
      <p className={styles.texto}>Página não encontrada</p>
      <img src={error} alt='logo do restaurante Winther' width={400} />
    </div>
  )
}