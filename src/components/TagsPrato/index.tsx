import { Prato } from 'types/Prato';
import styles from './TagsPratos.module.scss';

export default function TagsPrato(
  {
    category,
    size,
    price
  }: Prato) {
  return (
    <>
      <div className={styles.tags}>
        <div className={`${styles.tags__tipo} ${styles[`tags__tipo__${category.label.toLowerCase()}`]}`}>
          {category.label}
        </div>
        <div className={styles.tags__porcao}>
          {size}g
        </div>
        <div className={styles.tags__valor}>
          R$ {price.toFixed(2)}
        </div>
      </div>
    </>
  )
}