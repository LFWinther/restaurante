import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import restaurante from 'assets/restaurante.webp';
import Cardapio from 'pages/Cardapio';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';
import Localizacao from 'components/Mapa/Localizacao';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate()

  function verMais(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }
  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              onClick={() => verMais(item)}
              className={styles.recomendado__botao}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={restaurante} alt='Restaurante Winther' />
        <div className={styles.nossaCasa__endereco}>
          Rua Carlos Condack, 12 <br /> São Geraldo - NF <br /> <br /> Quarta à Domingo<br />das 19h às 22h
        </div>
      </div>
      <div>
        <Localizacao/>
      </div>
    </section>
  )
}