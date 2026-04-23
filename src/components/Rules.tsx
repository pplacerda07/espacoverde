"use client";
import { useState } from "react";
import styles from "./Rules.module.css";

export default function Rules() {
  const [activeTab, setActiveTab] = useState("rules");

  return (
    <section id="regras" className={`section bg-white ${styles.rulesSection}`}>
      <div className="container">
        <h2 className="section-title">Informações Importantes</h2>
        
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tabBtn} ${activeTab === "rules" ? styles.active : ""}`}
              onClick={() => setActiveTab("rules")}
            >
              Regras Gerais
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === "payment" ? styles.active : ""}`}
              onClick={() => setActiveTab("payment")}
            >
              Pagamento e Descontos
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === "rules" && (
              <div className={`${styles.contentPanel} animate-fade-in`}>
                <ul className={styles.rulesList}>
                  <li><strong>Capacidade Máxima:</strong> 120 pessoas.</li>
                  <li><strong>Montagem:</strong> A montagem do salão é responsabilidade do contratante.</li>
                  <li><strong>Decoração:</strong> Todo material deve ser retirado ao final do evento.</li>
                  <li><strong>Higiene:</strong> Itens como papel higiênico, detergente e sacos de lixo são responsabilidade do contratante.</li>
                  <li><strong>Limpeza:</strong> A taxa de limpeza inclusa <strong>não abrange</strong> lavagem de louças, panelas e utensílios de cozinha.</li>
                  <li><strong>Música:</strong> Permitida música ao vivo e eletrônica.</li>
                  <li><strong>Piscina:</strong> Obrigatório o uso de traje de banho. Proibido produtos que alterem a coloração da água.</li>
                  <li className={styles.warningItem}><strong>Proibido:</strong> Efeitos especiais como bombas de serpentinas, pó colorido, confetes e papéis picados (inclusive para chá revelação).</li>
                </ul>
              </div>
            )}

            {activeTab === "payment" && (
              <div className={`${styles.contentPanel} animate-fade-in`}>
                <div className={styles.paymentGrid}>
                  <div className={styles.paymentCard}>
                    <h3>Forma de Pagamento</h3>
                    <ul>
                      <li><strong>Entrada:</strong> 40% do valor total no ato da reserva para garantia de data.</li>
                      <li><strong>Saldo Restante:</strong> Deve ser pago até 5 dias antes da data do evento.</li>
                    </ul>
                  </div>
                  <div className={styles.paymentCard}>
                    <h3>Descontos Especiais</h3>
                    <p>
                      Aproveite nossa condição especial para eventos realizados de <strong>segunda a quinta-feira</strong>.
                    </p>
                    <p className={styles.note}>* Válido apenas para dias úteis (exceto feriados e vésperas de feriado).</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
