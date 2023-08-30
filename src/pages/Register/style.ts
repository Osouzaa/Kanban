import styled from "styled-components";

const Bg = styled.div`
  background-color: #3f3f3f;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  button {
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    margin-top: 1.5em;
  }
`;
const ContentLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    outline: none;
    padding-left: 0.5em;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-top: 10px;

    &::placeholder {
      color: #d1d1d1;
      font-size: 14px;
    }

    &.InputEmail {
      margin-bottom: 2em;
    }
  }

  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;
export { Bg, Container, ContentLabel };
