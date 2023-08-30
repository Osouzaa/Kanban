import * as C from "./style";

const Filter = () => {
  return (
    <C.Container>
      <label>Filtro </label>
      <select name="progress" id="progress">
        <option value="">Todos</option>
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>

      <button>Pesquisar</button>
    </C.Container>
  );
};

export { Filter };
