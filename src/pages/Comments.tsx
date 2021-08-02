import { FC, useCallback, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CommentsList, LoadingSpinner, NewCommentForm } from '../components';
import { getAllComments } from '../libs/api';
import { useHttp } from '../libs/hooks';

export const Comments: FC = () => {
    const [isAddingComment, setIsAddingComment] = useState<boolean>(false);
    const { quoteId } = useParams<{ quoteId: string }>();

    const { sendRequest, status, data } = useHttp(getAllComments);

    useEffect(() => {
        sendRequest(quoteId);
    }, [quoteId, sendRequest]);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const addCommentHandler = useCallback(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    let comments;

    if (status === 'pending') {
        comments = (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }
    if (status === 'completed' && data && data.length > 0) {
        comments = <CommentsList comments={data} />;
    }
    if (status === 'completed' && (!data || data.length === 0)) {
        comments = <CommentsList comments={data} />;
    }

    return (
        <Wrapper>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <Button onClick={startAddCommentHandler}>Add a Comment</Button>
            )}
            {isAddingComment && (
                <NewCommentForm
                    quoteId={quoteId}
                    onAddedComment={addCommentHandler}
                />
            )}
            {comments}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 40rem;
    margin: auto;
    text-align: center;

    & > button {
        font-size: 1.25rem;
    }
`;
