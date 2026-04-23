import Link from "next/link";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const whatsappUrl = "https://wa.me/556798560708?text=Oie%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20reserva%20do%20espa%C3%A7o";

  return (
    <section id="pacotes" className={`section bg-bege ${styles.pricing}`}>
      <div className="container">
        <h2 className="section-title">Pacotes e Valores</h2>
        <p className={styles.subtitle}>⚠️ Valores válidos até 31/12/2026</p>
        
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Pacote Padrão</h3>
              <p>Para até 80 pessoas</p>
            </div>
            <div className={styles.cardBody}>
              <p><strong>Horário:</strong> 08h às 18h</p>
              <p className={styles.small}>Possibilidade de extensão até 22h, mediante horas adicionais.</p>
              <hr />
              <ul className={styles.includedList}>
                <li>Locação completa de todos os ambientes</li>
                <li>Mesas para 8 lugares e cadeiras</li>
                <li>Móveis rústicos (aparadores, bistrô)</li>
                <li>Área kids completa</li>
                <li>Para buffet: toalhas, cobre-manchas, pratos, talheres, taças, 2 rechauds</li>
                <li>Taxa de limpeza do salão inclusa</li>
              </ul>
              <div className={styles.priceContainer}>
                <span className={styles.priceText}>A consultar</span>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Solicitar Orçamento</a>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardFeatured}`}>
            <div className={styles.cardHeader}>
              <h3>Opcional: Mesa Adicional</h3>
              <p>Para até 120 pessoas</p>
            </div>
            <div className={styles.cardBody}>
              <p>Contratação de jogos de mesas adicionais com tampo em MDF.</p>
              <hr />
              <ul className={styles.includedList}>
                <li>Mesa para 8 lugares</li>
                <li>8 Cadeiras</li>
                <li>Toalha e cobre-manchas</li>
                <li>Pratos, talheres e taças inclusas</li>
              </ul>
              <div className={styles.priceContainer}>
                <span className={styles.priceText}>A consultar</span>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Solicitar Orçamento</a>
            </div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Horas Adicionais</h3>
              <p>Estenda seu evento</p>
            </div>
            <div className={styles.cardBody}>
              <p>Curta seu evento por mais tempo garantindo horas extras.</p>
              <hr />
              <ul className={styles.includedList}>
                <li><strong>Aviso Prévio:</strong> Informado com até 48h de antecedência.</li>
                <li><strong>Sem Aviso Prévio:</strong> Multa por hora excedida caso não informado com antecedência.</li>
              </ul>
              <div className={styles.priceContainer}>
                <span className={styles.priceText}>A consultar</span>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Solicitar Orçamento</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
