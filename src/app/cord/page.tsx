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
      <h1>Coordenadas</h1>
      <form>
        <div className={styles.divInput}>
          <label htmlFor="logitude">Longitude</label>
          <input
            type="text"
            placeholder="20°47’53”S"
            name="logitude"
            id="logitude"
          />
        </div>
        <div className={styles.divInput}>
          <label htmlFor="latitude">Latitude</label>
          <input
            type="text"
            placeholder="43°23’16”W"
            name="latitude"
            id="latitude"
          />
        </div>

        <Image src="/map.svg" alt="" width={600} height={600} />

        <Button
          type="primary"
          href="/cord"
          danger
          className={styles.botaoMapeamento}
        >
          Realizar Mapeamento
        </Button>
      </form>
    </main>
  </section>
);

export default HomePage;
