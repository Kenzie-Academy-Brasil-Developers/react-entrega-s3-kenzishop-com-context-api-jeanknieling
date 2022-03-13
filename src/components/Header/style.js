import styled from "styled-components";

export const HeaderContainer = styled.header`
  border-bottom: 1px solid var(--color-gray);
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: 100%;

  a {
    color: var(--color-black);
    cursor: pointer;
    text-decoration: none;
  }

  h1 {
    font-size: 22px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    width: 210px;

    ul {
      color: var(--color-black);
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 250px;

      li {
        a {
          display: flex;
          font-size: 16px;
          margin-right: 10px;
          position: relative;

          svg {
            margin-right: 5px;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`;
