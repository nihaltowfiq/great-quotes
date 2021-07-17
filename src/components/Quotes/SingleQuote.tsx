import { FC } from 'react';
import styled from 'styled-components';
import { DUMMY_DATA } from '../../data';

export const SingleQuote: FC<PropsType> = ({ data }) => {
    const { text, author } = data;
    return (
        <Wrapper className="">
            <p>{text}</p>
            <figcaption>{author}</figcaption>
        </Wrapper>
    );
};

interface PropsType {
    data: typeof DUMMY_DATA[0];
}

const Wrapper = styled.figure`
    background-color: var(--primary);
    color: white;
    border-radius: 6px;
    padding: 3rem;
    margin: 3rem auto;
    width: 100%;
    max-width: 40rem;

    p {
        font-size: 2.5rem;
    }
    figcaption {
        font-style: italic;
        font-size: 1.5rem;
        text-align: right;
        color: var(--secondary);
    }
`;
