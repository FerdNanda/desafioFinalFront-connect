import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// importando todos os componentes para serem usados nas rotas

import Inicio from "../Início/Inicio";
import Acoes from "../AçõesDaConnect/Acoes";
import QuemSomos from "../QuemSomos/QuemSomos";
import Perfil from "../Perfil/Perfil";


import logo from "../../assets/logo.png";
import imgPerfil from "../../assets/imgPerfil.png";

import styles from "./NavBar.module.scss"


function NavBar() {

  return (
    <BrowserRouter>

      <nav className={styles.NavBar}>
        <Link to="/"> 
          <img className={styles.logo} src={logo} alt="Logo" />
          </Link>

        <ul>
          <li> 
            <Link to="/"> Início </Link> 
          </li>

          <li> 
            <Link to="/acoes"> Ações da Connect</Link> 
          </li>

          <li>
             <Link to="/quemSomos"> Quem Somos </Link> 
          </li>
 
        </ul>
     
        <Link to="/perfil" className={styles.imgPerfil} > 
         <img className={styles.imgPerfil} src={imgPerfil} alt="Fernanda" />
          
        </Link>
         
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acoes" element={<Acoes />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/perfil" element={<Perfil />} />
       
      </Routes>

    </BrowserRouter>
  );
}
export default NavBar;

