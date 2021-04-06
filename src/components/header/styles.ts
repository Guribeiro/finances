import styled from 'styled-components';

export const Container = styled.header`
    background-color: #5429CC;
`

export const Content = styled.div`
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2rem 0 10rem;

    button{
        font-weight: 600;
        color: var(--text-button);
        background-color: var(--button-blue);
        padding: 12px 32px;
        border: 0;
        border-radius: 5px;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

    
`;