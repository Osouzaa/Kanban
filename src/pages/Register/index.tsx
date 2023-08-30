import * as C from "./style";
const Register = () => {
  return (
    <C.Bg>
      <form action="#">
        <C.Container>
          <C.ContentLabel>
            Nome Completo
            <input type="text" placeholder="Digite seu nome completo" />
          </C.ContentLabel>
          <C.ContentLabel>
            E-mail
            <input type="text" placeholder="Digite seu e-mail" />
          </C.ContentLabel>
          <C.ContentLabel>
            Senha
            <input type="password" placeholder="Digite seu senha" />
          </C.ContentLabel>
          <C.ContentLabel>
            Confirme sua senha
            <input type="password" placeholder="Confirme sua senha" />
          </C.ContentLabel>

          <button>
            Registrar
          </button>
        </C.Container>
      </form>
    </C.Bg>
  );
};

export { Register };
