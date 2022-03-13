import styled from "styled-components";

export const CardContainer = styled.li`
  background-color: var(--color-white);
  border-radius: 3px;
  box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  width: 200px;
  margin: 15px;

  figure {
    border-bottom: 1px solid var(--color-gray);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 170px;
    width: 92%;
    img {
      width: 60px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 40%;
    width: 90%;

    button {
      align-self: center;
      background-color: var(--color-purple);
      border: none;
      border-radius: 3px;
      color: var(--color-white);
      margin: 5px;
      padding: 5px;
      width: 100%;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    height: 170px;
    width: 100%;
    margin-bottom: 0;

    figure {
      border: none;
      justify-content: flex-start;
      margin-left: 25px;
      width: 15%;
    }

    div {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 70%;

      p {
        min-width: 175px;
      }

      button {
        font-size: 12px;
        padding: 8px;
        margin-right: 15px;
        width: 20%;

        :active {
          transform: translateY(2px);
        }
      }
    }
  }
`;
