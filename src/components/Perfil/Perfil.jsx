import styles from "./Perfil.module.scss";
import imgPerfil from "../../assets/imgPerfil.png"
function Perfil() {
  return (
    <section className={styles.containerTelaPerfil}>
      <article>
        <img src={imgPerfil} alt="foto de perfil" />

        <div className={styles.cardInfo}>
          <h2>Fernanda Laia</h2>
          <h3>Voluntaria</h3>
          <p className={styles.paragrafoSobreMim}>sobre mim</p>

          <address>
            <p>sp</p>
            <p>email</p>
            <p>desde2026</p>
          </address>

          <ul className={styles.listaInteresses}>
            <li>educação</li>
            <li>meio ambiente</li>
            <li>assistencia social</li>
            <li>design</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Perfil;
