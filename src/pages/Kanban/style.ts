import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5c5c5c ;

  @media (max-width:414px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

export { Container };
