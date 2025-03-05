import React from "react";
import styles from "./Busca.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Busca({ busca, setBusca }: Props) {
  return (
    <div className={styles.busca}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder="Burcar"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}