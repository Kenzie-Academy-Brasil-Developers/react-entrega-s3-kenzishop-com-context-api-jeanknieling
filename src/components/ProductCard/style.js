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
            margin-bottom: 5px;
            padding: 5px;
            width: 100%;

            :active {
                transform: translateY(2px);
            }
        }
    }
`;