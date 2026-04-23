import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  const features = [
    { icon: "🌿", title: "Múltiplos Ambientes", desc: "Salão principal amplo e aconchegante com decoração rústica-elegante." },
    { icon: "🏊‍♀️", title: "Piscina", desc: "Área externa agradável com piscina para o conforto dos convidados." },
    { icon: "🥩", title: "Churrasqueira e Forno", desc: "Estrutura completa com fogão e forno a lenha, pia e balcão em mármore." },
    { icon: "🍳", title: "Cozinha Equipada", desc: "Geladeira, fogão industrial, freezer e todo suporte necessário." },
    { icon: "🚸", title: "Área Kids", desc: "Balanço, gira-gira e cama elástica para a diversão das crianças." },
    { icon: "🪑", title: "Móveis Rústicos", desc: "Aparadores, mesas, bistrô e jogos de bancos inclusos no espaço." }
  ];

  return (
    <section id="espaco" className={`section bg-white ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">O Espaço</h2>
        
        <div className={styles.grid}>
          <div className={styles.images}>
            <div className={styles.mainImage}>
               <Image src="/imagens/hero.png" alt="Salão principal do Ágape" fill style={{objectFit: 'cover', borderRadius: '8px'}} />
            </div>
            <div className={styles.smallImages}>
               <div className={styles.imgWrapper}>
                 <Image src="/imagens/about2.png" alt="Área externa" fill style={{objectFit: 'cover', borderRadius: '8px'}} />
               </div>
               <div className={styles.imgWrapper}>
                 <Image src="/imagens/about3.png" alt="Detalhes rústicos" fill style={{objectFit: 'cover', borderRadius: '8px'}} />
               </div>
            </div>
            <p className={styles.imageDisclaimer}>* Imagens meramente ilustrativas</p>
          </div>
          
          <div className={styles.content}>
            <p className={styles.intro}>
              O Ágape Espaço Verde é o cenário perfeito para transformar seus momentos em memórias inesquecíveis.
              Um lugar onde a natureza encontra a sofisticação através de uma estrutura completa e acolhedora.
            </p>
            
            <div className={styles.featuresList}>
              {features.map((item, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIcon}>{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.infoText}>
              <strong>Banheiros:</strong> Estrutura completa com sanitários masculino, feminino, acessível (cadeirante) e exclusivo para colaboradores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
