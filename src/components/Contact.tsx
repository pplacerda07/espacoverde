import styles from "./Contact.module.css";

export default function Contact() {
  const whatsappUrl = "https://wa.me/556798560708?text=Oie%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20reserva%20do%20espa%C3%A7o";

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );

  return (
    <section id="contato" className={`section bg-bege ${styles.contactSection}`}>
      <div className="container">
        <h2 className="section-title">Solicite seu Orçamento</h2>
        
        <div className={styles.contactContainer}>
          <div className={styles.whatsappCard}>
            <div className={styles.whatsappIconWrapper}>
              <span className={styles.whatsappIcon} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <WhatsAppIcon />
              </span>
            </div>
            <h3>Fale Conosco pelo WhatsApp</h3>
            <p>
              Estamos prontos para tirar todas as suas dúvidas, verificar datas disponíveis e 
              enviar um orçamento personalizado para o seu evento.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.wppBtn}`}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </span>
              Iniciar Conversa
            </a>
          </div>

          <div className={styles.mapContainer}>
            <div className={styles.mapInfo}>
              <h3>Nossa Localização</h3>
              <p>📍 Rua Takeo Taíra, 200, Mata do Jacinto — Campo Grande/MS</p>
              <p className={styles.reference}>(Próximo ao Parque do Sóter)</p>
            </div>
            {/* Embedded map replacement block - using an iframe for Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.318858276182!2d-54.5828453!3d-20.4521443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6430db8335b%3A0x6a0a0df6ef6e6c92!2sR.%20Takeo%20Taira%2C%20200%20-%20Mata%20do%20Jacinto%2C%20Campo%20Grande%20-%20MS%2C%2079033-040!5e0!3m2!1spt-BR!2sbr!4v1713800000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="350" 
              style={{border:0, borderRadius: "8px"}} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
