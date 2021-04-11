import styled from 'styled-components';
import { darken, transparentize } from 'polished';

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

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

    button[type='submit']{
        margin-top: 24px;
        align-items: center;
        padding: 20px 0;
        color: #fff;
        font-weight: 400;
        background-color: var(--gren);
        border: 0;
        border-radius: 5px;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

`;


export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5rem;
    margin: 1rem 0;
`

const colors = {
    green: '#33CC95',
    red: '#e52e4d',
}


export const RadioBox = styled.button<RadioBoxProps>`

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    
    background-color: ${({ isActive, activeColor }) => isActive &&
        activeColor && transparentize(0.8, colors[activeColor])
    };
    border: 1px solid #DEE0E8;

    padding: 20px 0;

    transition: border-color 0.3s;

    &:hover{
        border-color: ${darken(.2, '#DEE0E8')};
    }

    img{
        height: 20px;
        width: 20px;
    }

    span {
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`