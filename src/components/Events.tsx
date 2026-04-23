import styles from "./Events.module.css";

export default function Events() {
  const eventsList = [
    { name: "Casamentos", desc: "Celebrações inesquecíveis em um ambiente naturalmente romântico." },
    { name: "Aniversários", desc: "Comemore mais um ano de vida com estilo, seja dia ou noite." },
    { name: "Bodas", desc: "Renove seus votos com a elegância que a ocasião exige." },
    { name: "Formaturas", desc: "Festas intimistas para celebrar a sua grande conquista." },
    { name: "Confraternizações", desc: "O local perfeito para reunir sua equipe com conforto e lazer." },
  ];

  return (
    <section id="eventos" className={`section bg-bege ${styles.events}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Eventos Atendidos</h2>
          <p className={styles.intro}>
            O Ágape Espaço Verde é o local ideal para celebrar momentos marcantes, focado em 
            eventos íntimos, elegantes e especiais.
          </p>
        </div>

        <div className={styles.eventsGrid}>
          {eventsList.map((event, index) => (
            <div key={index} className={styles.eventItem}>
              <div className={styles.number}>{(index + 1).toString().padStart(2, '0')}</div>
              <div className={styles.eventContent}>
                <h3>{event.name}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.alert}>
          <p><strong>Atenção:</strong> Não realizamos eventos com bilheteria.</p>
        </div>
      </div>
    </section>
  );
}
