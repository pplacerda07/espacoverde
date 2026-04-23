"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/556798560708?text=Oie%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20reserva%20do%20espa%C3%A7o";

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/imagens/logo.jpeg" alt="Ágape Espaço Verde" width={50} height={50} className={styles.logoImg} />
          <span className="brand-font">Ágape</span>
        </Link>

        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li><Link href="#espaco" onClick={() => setMenuOpen(false)}>O Espaço</Link></li>
          <li><Link href="#pacotes" onClick={() => setMenuOpen(false)}>Pacotes</Link></li>
          <li><Link href="#eventos" onClick={() => setMenuOpen(false)}>Eventos</Link></li>
          <li><Link href="#regras" onClick={() => setMenuOpen(false)}>Regras</Link></li>
          <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Orçamento</a></li>
        </ul>
      </div>
    </nav>
  );
}
