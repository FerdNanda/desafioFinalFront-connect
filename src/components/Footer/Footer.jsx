import styles from "./Footer.module.scss";

import logo from "../../assets/logo.png";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";



function Footer() {
  return (
    <section className={styles.Footer}>

 
      <img className={logo.Footer} src={logo} alt="Logo" />



      <h1>Connect</h1>

      <p>
        © 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto
        destinado exclusivamente a fins educativos.
      </p>


      <img className={styles.whatsapp} src={whatsapp} alt="Whatsapp" />
      <img className={styles.instagram} src={instagram} alt="Instagram" />
      <img className={styles.linkedin} src={linkedin} alt="LinkedIn" />
      
   
    </section>

  );
}

export default Footer
