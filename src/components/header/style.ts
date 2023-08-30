import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3f3f3f;
  padding: 0 1em;

  width: 100vw;
  height: 80px;
  border-bottom: 2px solid #FFFFFF;

  img {
    width: 80px;
    height: 60px;
  }
`;

const ContentUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  color: #FFFFFF;

  span {
    font-size: 12px;
    text-decoration: underline;
    
  }
`;

export { Header, ContentUser };
