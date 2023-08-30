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

const Image = styled.img`
  width: 350px;
  height: 250px;
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
const ContentLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;

  input {
    outline: none;
    padding-left: 0.5em;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border: none;

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

const ContentPassword = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  a {
    color: #ffffff;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    font-weight: 400;
  }
`;

const ContentButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  p {
    color: #ffffff;
    font-size: 16px;

    &::placeholder {
      text-decoration: underline;
    }
  }
`;
export { Bg, Container, ContentLabel, Image, ContentPassword, ContentButton };
