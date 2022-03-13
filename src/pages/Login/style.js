import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  h1 {
    color: var(--color-primary);
    font-size: 24px;
    margin-bottom: 25px;
    text-align: center;
  }

  form {
    background-color: var(--color-white);
    border-radius: 3px;
    box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.25);
    color: var(--color-black);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 320px;
    height: 350px;

    h2 {
        font-size: 20px;
    }

    label {
      display: flex;
      flex-direction: column;

      input {
        border-radius: 3px;
        border: 1px solid var(--color-gray);
        margin-top: 5px;
        padding: 10px;
        width: 280px;

        ::placeholder {
          font-size: 16px;
        }
      }
    }

    p {
      color: var(--color-red);
    }

    button {
      background-color: var(--color-purple);
      border-radius: 3px;
      border: none;
      box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.25);
      color: var(--color-white);
      font-weight: bold;
      padding: 10px;
      width: 87%;

      :active {
        transform: translateY(2px);
      }
    }
  }
`;
