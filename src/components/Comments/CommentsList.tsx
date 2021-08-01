import { FC } from 'react';
import styled from 'styled-components';
import { CommentItem } from '..';

export const CommentsList: FC<PropsType> = ({ comments }) => {
    return (
        <List>
            {comments.map((comment) => (
                <CommentItem key={comment.id} text={comment.text} />
            ))}
        </List>
    );
};

interface PropsType {
    comments: any[];
}

const List = styled.ul`
    list-style: none;
    margin: 2.5rem 0;
    padding: 0;
`;
