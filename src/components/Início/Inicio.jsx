import styles from "./Inicio.module.scss";
import TelaInicial  from "../../assets/img-tela-inicial.png"


function Inicio() {
  return (
    <section className={styles.containerTelaInicial}>
      <div>
        <h1> Projetos Sociais que transformam </h1>
       <p>
        Conectamos sua empresa com projetos sociais impactantes.
        Juntos, criamos mudanças reais na sociedade.
       </p>
      
   
      </div>
       <img src={TelaInicial} alt="Pessoas de mãos unidas" />
    </section>
  );
}
export default Inicio;