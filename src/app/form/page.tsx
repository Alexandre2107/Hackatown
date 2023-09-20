import React from "react";
import { Button } from "antd";
import styles from "./page.module.css";

const HomePage = () => (
  <section className={styles.container}>
    <header className={styles.header}>
      <div>Team Maia</div>
      <Button type="primary" href="/" danger>
        Voltar
      </Button>
    </header>
    <main className={styles.main}>
      <h1>Formulário</h1>
      <form>
        <div className={styles.divInput}>
          <label htmlFor="implementosAgricolas">Implementos Agrícolas</label>
          <input type="text" placeholder="2 Arados, 2 Subsolador" />
        </div>
        <div className={styles.divInput}>
          <label htmlFor="areaDesmatada"></label>
          <input type="text" placeholder="" />
        </div>
      </form>
    </main>
  </section>
);

export default HomePage;
