import { FC, FormEvent, useRef } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import classes from './NewCommentForm.module.css';

export const NewCommentForm: FC<PropsType> = (props) => {
    const commentTextRef = useRef(null);

    const submitFormHandler = (event: FormEvent) => {
        event.preventDefault();

        // optional: Could validate here

        // send comment to server
    };

    return (
        <Form className={classes.form} onSubmit={submitFormHandler}>
            <FormControl onSubmit={submitFormHandler}>
                <label htmlFor="comment">Your Comment</label>
                <textarea id="comment" rows={5} ref={commentTextRef} />
            </FormControl>
            <div>
                <Button>Add Comment</Button>
            </div>
        </Form>
    );
};

interface PropsType {}

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
