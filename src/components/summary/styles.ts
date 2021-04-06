import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7rem;


    div{
        background-color: var(--background);
        padding: 1.5rem 2rem;
        border-radius: calc(1rem / 4);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            p{
                color: var(--text-body);
            }
        }

        strong{
            font-weight: 500;
            color: var(--text-title);
            font-size: 2rem;
            margin-top: 1rem;
        }
    }
`;
