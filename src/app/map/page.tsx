import React from "react";
import { Button } from "antd";
import styles from "./page.module.css";
import Image from "next/image";

const HomePage = () => (
  <section className={styles.container}>
    <header className={styles.header}>
      <div>Team Maia</div>
      <Button type="primary" href="/" danger>
        Voltar
      </Button>
    </header>
    <main className={styles.main}>
      <h1>Mapeamento</h1>
      <Image src="/map.svg" alt="" width={500} height={340} />
      <div className={styles.legend}>
        <ul>
          <li>
            <p>lodfalsdfjlasdlfjasdlfjlasjdfljasdçlfkjçasjdfçlkjdsfçljsadjflaksdjfljsadfçljasdç</p>
          </li>
          <li>
            <p>teste</p>
          </li>
          <li>
            <p>teste</p>
          </li>
          <li>
            <p>teste</p>
          </li>
          <li>
            <p>testes</p>
          </li>
          <li>
            <p>testes</p>
          </li>
          <li>
            <p>testes</p>
          </li>
          <li>
            <p>tsetse</p>
          </li>
        </ul>
      </div>
    </main>
  </section>
);

export default HomePage;
