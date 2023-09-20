import React from "react";
import { Button } from "antd";
import styles from "./page.module.css";
import map from "../../../public/map.jpeg";

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
        <div className={styles.divCord}>
          <div className={styles.divInput}>
            <label htmlFor="logitude">Longitude</label>
            <input type="text" placeholder="20°47’53”S" />
          </div>
          <div className={styles.divInputRight}>
            <label htmlFor="latitude">Latitude</label>
            <input type="text" placeholder="43°23’16”W" />
          </div>
        </div>

        <img src="map.jpeg" alt="" className={styles.map} />

        <Button type="primary" href="/cord" danger className={styles.botaoMapeamento}>
          Realizar Mapeamento
        </Button>
      </form>
    </main>
  </section>
);

export default HomePage;
