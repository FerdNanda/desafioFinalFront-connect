import styles from "./Footer.module.scss";

import logo from "../../assets/logo.png";
import Whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

function Footer() {
  return (
    <Footer>
      <div>
        <img src={logo} alt="Logo da connect" />
        <h2>Connect</h2>
      </div>
      <p>
        © 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto
        destinado exclusivamente a fins educativos.
      </p>

    <nav className={styles.navFooter}>
        <img src={Whatsapp} alt="Logo do Whatsapp" />
        <img src={Instagram} alt="Logo do Instagram" />
        <img src={Linkedin} alt="Logo do LinkedIn" />
      </nav>
    </Footer>
  );
}

export default Footer;
