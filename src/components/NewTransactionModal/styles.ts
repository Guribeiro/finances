import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;

    h1{
        font-size: 1.5rem;
        color: var(--text-title);
        font-weight: 600;
        margin-bottom: 32px;
    }

    input{
        background-color: var(--input-background);
        color: var(--text-body);
        padding: 20px 24px;
        border: 1px solid var(--input-stroke);
        border-radius: 5px;
        font-weight: 300;

        & + input{
            margin-top: 16px;
        }
    }

    button{
        margin-top: 24px;
        align-items: center;
        padding: 20px 0;
        color: #fff;
        font-weight: 400;
        background-color: var(--gren);
        border: 0;
        border-radius: 5px;
    }
`;