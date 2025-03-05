import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/fachada.webp';
import adega from 'assets/sobre/adega.webp';
import cozinha from 'assets/sobre/cozinha.webp';

export default function Sobre() {
  const imagens = [adega, cozinha]
  return (
    <section className={stylesTema.containder}>
      <h3 className={stylesTema.titulo}>Sobre nós</h3>
      <div className={styles.sobreNos}>
        <img src={casa} alt='Restaurante Winther' />
        <div className={styles.sobreNos__texto}>
          <p>
            No Winther, oferecemos uma experiência gastronômica sofisticada, onde a culinária contemporânea se encontra com ingredientes selecionados e técnicas refinadas. Nossa proposta é proporcionar momentos inesquecíveis em um ambiente acolhedor e romântico, inspirado na elegância do inverno.
          </p>
          <p>
            Nosso menu é cuidadosamente elaborado para surpreender os paladares mais exigentes, combinando sabores harmoniosos em pratos que celebram a alta gastronomia. Além disso, contamos com uma seleção especial de carnes preparadas com maestria, garantindo uma experiência única para cada cliente.
          </p>
          <p>
            Para tornar sua experiência ainda mais memorável, oferecemos uma requintada carta de vinhos, cuidadosamente escolhida para harmonizar perfeitamente com nossos pratos. Seja uma noite romântica, um jantar especial ou uma celebração, o Winther é o destino ideal para quem busca sofisticação e excelência.
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens}>
            <img src={imagem} alt='imagens do restaurante Winther' className={styles.imagem} />
          </div>
        ))}
      </div>
    </section>
  );
}