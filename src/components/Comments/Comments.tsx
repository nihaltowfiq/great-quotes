import { FC, useState } from 'react';
import styled from 'styled-components';
import { NewCommentForm } from '..';

export const Comments: FC = () => {
    const [isAddingComment, setIsAddingComment] = useState<boolean>(false);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    return (
        <Wrapper>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className="btn" onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && <NewCommentForm />}
            <p>Comments...</p>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    text-align: center;

    & > button {
        font-size: 1.25rem;
    }
`;
