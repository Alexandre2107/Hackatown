import React from "react";
import { Button, Checkbox } from "antd";
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
      <form className={styles.form}>
        <div className={styles.divInput}>
          <label htmlFor="implementosAgricolas">Implementos Agrícolas</label>
          <input
            type="text"
            placeholder="2 Arados, 2 Subsolador"
            name="implementosAgricolas"
            id="implementosAgricolas"
          />
        </div>

        <div className={styles.divInput}>
          <label htmlFor="areaPlantação">Área Plantação(he)</label>
          <input
            type="text"
            placeholder="50"
            name="implementosAgricolas"
            id="implementosAgricolas"
          />
        </div>

        <div className={styles.divInput}>
          <label htmlFor="areaMataNativa">Área Mata Nativa</label>
          <input
            type="text"
            placeholder="10"
            name="implementosAgricolas"
            id="implementosAgricolas"
          />
        </div>

        <div className={styles.divInput}>
          <label htmlFor="beneficiamentoCafe">
            Beneficiamento de Café (Kg)
          </label>
          <input
            type="text"
            placeholder="20"
            name="implementosAgricolas"
            id="implementosAgricolas"
          />
        </div>
        <div className={styles.divInput}>
          <label htmlFor="areaDesmatamento">Área Desmatamento(he)</label>
          <input
            type="text"
            placeholder="10"
            name="areaDesmatamento"
            id="areaDesmatamento"
          />
        </div>

        <div className={styles.divInput}>
          <label htmlFor="areaPecuaria">Área Pecuária</label>
          <input
            type="text"
            placeholder="10"
            name="areaPecuaria"
            id="areaPecuaria"
          />
        </div>

        <div className={styles.divInput}>
          <label htmlFor="fotovoltaico">Fotovoltaico</label>
          <input
            type="text"
            placeholder="Não"
            name="fotovoltaico"
            id="fotovoltaico"
          />
        </div>

        <div className={styles.divInput}>
          <label htmlFor="areaGrama">Área Grama(he)</label>
          <input type="text" placeholder="30" name="areaGrama" id="areaGrama" />
        </div>

        <Button type="primary" href="/cord">
          Submit
        </Button>
      </form>
    </main>
  </section>
);

export default HomePage;
