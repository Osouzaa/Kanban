import * as C from "./style";
import { Header } from "../../components/header";
import { Filter } from "../../components/Filter";

const Kanban = () => {
  return (
    <>
      <Header />
      <C.Container>
        <Filter />
      </C.Container>
    </>
  );
};

export { Kanban };
