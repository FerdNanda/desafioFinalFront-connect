import styles from "./Perfil.module.scss";
import imgPerfil from "../../assets/imgPerfil.png"
function Perfil() {
  return (
    <section className={styles.containerTelaPerfil}>
      <article>
        <img src={imgPerfil} alt="foto de perfil" />

        <div className={styles.cardInfo}>
          <h2>Fernanda Laia</h2>
          <h3>Voluntária</h3>
          <p className={styles.paragrafoSobreMim}>Alguém apaixonada pelo meio ambiente e que acredita que o amor que demonstramos pela Criação, de alguma forma, sempre acaba voltando para nós</p>

          <address>
            <p>SP</p>
            <p>fenandalaia@outlook.com</p>
            <p>desde  Fev/2026</p>
          </address>

          <ul className={styles.listaInteresses}>
            <li>Meio Ambiente</li>
            <li>Design</li>
            <li>Assistência Social</li>
            <li>Educação</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Perfil;
