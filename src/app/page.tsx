import React from "react";
import { Button } from "antd";
import styles from "./page.module.css";
import Image from "next/image";

const HomePage = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <div>Team Maia</div>
      <Button type="primary" href="form/">
        Faça o Teste
      </Button>
    </header>
    <main className={styles.main}>
      <div className={styles.mainInfo}>
        <h1>
          Melhorar processo de validação do índice de sustentabilidade
          utilizando IA
        </h1>
        <p>
          Melhora de processo de checagem de credito de carbono utilizando
          inteligência artificial
        </p>
        <p>Teste Rápido e Eficiente</p>
        <p>Resultado imediato</p>
      </div>
      <div className={styles.mainImg}>
        <Image src="/img1.svg" alt="Vercel Logo" width={400} height={270} />
        <div>
          <Image src="/img2.svg" alt="Vercel Logo" width={195} height={195} />
          <Image src="/img3.svg" alt="Vercel Logo" width={195} height={195} />
        </div>
      </div>
    </main>
  </div>
);

export default HomePage;
