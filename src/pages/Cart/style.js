import styled from "styled-components";

export const CartVitrineContainer = styled.div`
  width: 100%;
  height: 100%;

  main {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding: 20px;

    p.no-products {
      margin-top: 50px;
    }
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    main {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      max-width: 1200px;

      p.no-products {
          align-self: center;
          min-width: 300px;
          margin-left: 25px;
          width: 100%;
      }
    }
  }
`;
