import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  select {
    width: 150px;
    height: 30px;
    border-radius: 5px;
    border: none;
    color: #000000;
    margin-left: 0.5em;
    outline: none;
  }

  button {
    padding: 0.5em 1em;
    border-radius: 10px;
    border: 0;
    color: #000000;
    font-weight: 500;
    margin-left: 1em;
  }

  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
`;

export { Container };
