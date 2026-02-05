import styles from "./Inicio.module.scss";
import backgroundQuemSomos from "../../assets/backgroundQuemSomos.png"


function Inicio() {
  return (
    <section className={styles.containerTelaInicial}>
      <div>
        <h1> Projetos Sociais que transformam </h1>
        <p> A Connect é uma iniciativa que conecta empresas, pessoas e organizações sociais com um propósito em comum: gerar impacto positivo e transformar realidades. Atuamos no desenvolvimento e apoio a projetos sociais nas áreas de educação, inclusão, tecnologia, esporte e assistência social, sempre com foco em impacto real e sustentável.

Há anos, trabalhamos aproximando quem quer ajudar de quem precisa, promovendo ações sociais estruturadas, transparentes e alinhadas às necessidades das comunidades. Acreditamos que a transformação acontece quando propósito, colaboração e responsabilidade caminham juntos.

Nosso compromisso é conectar boas causas a quem deseja fazer a diferença, criando pontes entre empresas, voluntários e projetos sociais que realmente transformam vidas.


        </p>
 
       <img src={backgroundQuemSomos} alt="Pessoas de mãos unidas" />
   
      </div>
    </section>
  );
}
export default Inicio;