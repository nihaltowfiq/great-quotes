import { FC } from 'react';
import styled from 'styled-components';

export const CommentItem: FC<PropsType> = ({ text }) => {
    return (
        <Item>
            <p>{text}</p>
        </Item>
    );
};

interface PropsType {
    text: string;
}

const Item = styled.li`
    margin: 1rem 0;
    color: #4a5555;
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid teal; ;
`;
