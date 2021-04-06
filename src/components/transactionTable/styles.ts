import styled from 'styled-components';

export const Container = styled.div`
        margin-top: 4rem;

    table {
        border: 1px solid red;
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: var(--text-body);
            padding: 1rem 2rem;
            line-height: 1.5rem;
            text-align: left;
        }

        td{
            padding: 1rem 2rem;
            border:0;
            background-color: var(--shape);
            color: var(--text-body);
            border-radius: calc(1rem / 4);

            &:first-child{
                color: var(--text-title);
            }
        }
    }
`;