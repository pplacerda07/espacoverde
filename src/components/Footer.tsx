import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <h2 className="brand-font">Ágape Espaço Verde</h2>
          <p>Seu evento no ambiente mais acolhedor e natural de Campo Grande.</p>
        </div>
        
        <div className={styles.footerLinks}>
          <h3>Acesso Rápido</h3>
          <ul>
            <li><Link href="#espaco">O Espaço</Link></li>
            <li><Link href="#pacotes">Pacotes</Link></li>
            <li><Link href="#eventos">Eventos</Link></li>
            <li><Link href="#regras">Regras e Info</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerContact}>
          <h3>Contato</h3>
          <p>📍 Rua Takeo Taíra, 200, Mata do Jacinto — Campo Grande/MS</p>
          <p>Próximo ao Parque do Sóter</p>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/espacoverdecgms" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/espacoverdecg/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Ágape Espaço Verde. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
