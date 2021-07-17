import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

export const QuoteForm: FC<PropsType> = ({ isLoading, onAddQuote }) => {
    const [values, setValues] = useState<typeof initialValues>(initialValues);
    const [errors, setErrors] = useState<typeof initialErrors>(initialErrors);

    useEffect(() => {
        if (values.author.length > 0) {
            setErrors((prevState) => ({ ...prevState, author: false }));
        }
        if (values.text.length > 0) {
            setErrors((prevState) => ({ ...prevState, text: false }));
        }
    }, [values]);
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setValues((prevState) => ({ ...prevState, [name]: value }));
    };
    const submitFormHandler = (e: FormEvent) => {
        e.preventDefault();
        if (values.author.length === 0 || values.text.length === 0) {
            setErrors((prevState) => ({
                ...prevState,
                error: true,
                author: !!(values.author.length === 0),
                text: !!(values.text.length === 0),
            }));
        } else {
            setErrors(initialErrors);
            onAddQuote(values);
        }
    };

    return (
        <Wrapper>
            <Form onSubmit={submitFormHandler}>
                {isLoading && (
                    <div className="Loading">{/* <LoadingSpinner /> */}</div>
                )}

                <div className="Control">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        name="author"
                        value={values.author}
                        onChange={handleChange}
                    />
                    {errors.error && errors.author && (
                        <span className="text-danger">Author is required</span>
                    )}
                </div>
                <div className="Control">
                    <label htmlFor="text">Text</label>
                    <textarea
                        rows={5}
                        name="text"
                        value={values.text}
                        onChange={handleChange}
                    />
                    {errors.error && errors.text && (
                        <span className="text-danger">Text is required</span>
                    )}
                </div>
                <div className="text-right">
                    <Button
                        size="lg"
                        variant="warning"
                        type="submit"
                        className="font-weight-semibold"
                    >
                        Add Quote
                    </Button>
                </div>
            </Form>
        </Wrapper>
    );
};

interface PropsType {
    isLoading: boolean;
    onAddQuote: (quote: typeof initialValues) => void;
}

const initialValues = {
    author: '',
    text: '',
};

const initialErrors = {
    error: false,
    author: false,
    text: false,
};

const Wrapper = styled(Card)`
    width: 40rem;
    margin: 0 auto;
    padding: 1rem;
    background-color: #c2e7f0;
`;
const Form = styled.form`
    position: relative;

    .Loading {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Control {
        margin-bottom: 0.5rem;

        label {
            font-weight: bold;
            display: block;
            margin-bottom: 0.5rem;
        }
        input,
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
    }
`;
