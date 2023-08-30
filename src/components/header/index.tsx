import * as C from "./style";
import logoHeader from "../../img/logoHEader.png";
 

const Header = () => {
  return (
    <C.Header>
      <div>
        <img src={logoHeader} alt="" />
      </div>
      <C.ContentUser>
        <p> Olá, Gabriel</p>
        <span> Sair</span>
      </C.ContentUser>
    </C.Header>
  );
};

export { Header };
