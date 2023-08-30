import * as C from "./style";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const Navigate = useNavigate();
  return (
    <C.Bg>
      <C.Image src={Logo} alt="" />
      <C.Container action="#">
        <C.ContentLabel>
          E-mail
          <input
            type="text"
            placeholder="Digite seu e-mail"
            className="InputEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </C.ContentLabel>

        <C.ContentLabel>
          Senha
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
          />
          <C.ContentPassword>
            <a href="#">Esqueceu a senha?</a>
          </C.ContentPassword>
        </C.ContentLabel>

        <C.ContentButton>
          <button>Entrar</button>

          <p onClick={() => Navigate("/register")}>Cadastrar-se</p>
        </C.ContentButton>
      </C.Container>
    </C.Bg>
  );
};

export { Login };
