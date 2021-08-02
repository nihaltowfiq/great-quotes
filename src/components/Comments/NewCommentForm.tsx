import { FC, FormEvent, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { addComment } from '../../libs/api';
import { useHttp } from '../../libs/hooks';
import { LoadingSpinner } from '../UI';

export const NewCommentForm: FC<PropsType> = ({ quoteId, onAddedComment }) => {
    const commentTextRef = useRef<HTMLTextAreaElement>(null);
    console.log(quoteId);

    const { sendRequest, status, error } = useHttp(addComment);

    useEffect(() => {
        if (status === 'completed' && !error) {
            onAddedComment();
        }
    }, [status, error, onAddedComment]);

    const submitFormHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = commentTextRef.current!.value;
        console.log(enteredText);

        // optional: Could validate here

        // send comment to server
        sendRequest({ comment: { text: enteredText }, id: quoteId });
    };

    return (
        <Form onSubmit={submitFormHandler}>
            {status === 'pending' && (
                <div className="centered">
                    <LoadingSpinner />
                </div>
            )}
            <FormControl onSubmit={submitFormHandler}>
                <label htmlFor="comment">Your Comment</label>
                <textarea id="comment" rows={5} ref={commentTextRef} />
            </FormControl>
            <div>
                <Button type="submit">Add Comment</Button>
            </div>
        </Form>
    );
};

interface PropsType {
    quoteId: string;
    onAddedComment: () => void;
}

const Form = styled.form`
    margin-top: 1rem;
    position: relative;
    text-align: center;

    button {
        font-size: 1.25rem;
    }
    .loading {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const FormControl = styled.div`
    margin-bottom: 0.5rem;

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    textarea {
        font: inherit;
        padding: 0.35rem;
        border-radius: 4px;
        background-color: #f0f0f0;
        border: 1px solid #c1d1d1;
        display: block;
        width: 100%;
        font-size: 1.25rem;

        &:focus {
            background-color: #cbf8f8;
            outline-color: teal;
        }
    }
`;
