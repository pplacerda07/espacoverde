import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  const whatsappUrl = "https://wa.me/556798560708?text=Oie%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20reserva%20do%20espa%C3%A7o";

  return (
    <header className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.heroContent} animate-fade-in`}>
        <div className={styles.heroLogoWrapper}>
          <Image src="/imagens/logo.jpeg" alt="Ágape Espaço Verde" width={100} height={100} className={styles.heroLogo} />
        </div>
        <h1 className="brand-font">Ágape Espaço Verde</h1>
        <p className={styles.slogan}>A natureza e a elegância em perfeita harmonia para o seu evento inesquecível.</p>
        <div className={styles.ctaGroup}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Solicite seu Orçamento</a>
          <Link href="#espaco" className="btn btn-outline">Conheça o Espaço</Link>
        </div>
      </div>
    </header>
  );
}
