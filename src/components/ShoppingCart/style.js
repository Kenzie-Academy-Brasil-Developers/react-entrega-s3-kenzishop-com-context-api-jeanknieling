import styled from "styled-components";

export const CartContainer = styled.div`
    background-color: var(--color-white);
    border-radius: 3px;
    box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.25);
    color: var(--color-black);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 13px;
    height: 220px;
    min-width: 280px;
    margin: 15px 15px 0 20px;
    padding: 20px;

    div {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
    }

    button {
        background-color: var(--color-blue);
        border-radius: 3px;
        border: none;
        color: var(--color-white);
        cursor: pointer;
        padding: 10px;
    }
`;