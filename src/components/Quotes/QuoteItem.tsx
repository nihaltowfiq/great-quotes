import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { DUMMY_DATA } from '../../data';

export const QuoteItem: FC<PropsType> = ({ data }) => {
    const history = useHistory();
    const { id, author, text } = data;
    return (
        <Item>
            <figure>
                <blockquote>
                    <p>{text}</p>
                </blockquote>
                <figcaption>{author}</figcaption>
            </figure>
            <Button
                size="lg"
                variant="primary"
                className="font-weight-semibold text-white"
                onClick={() => history.push(`/quotes/${id}`)}
            >
                View Fullscreen
            </Button>
        </Item>
    );
};

interface PropsType {
    data: typeof DUMMY_DATA[0];
}

const Item = styled.li`
    width: 40rem;
    margin: 1rem auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: #c2e7f0;

    &:last-of-type {
        border-bottom: none;
    }
    figure {
        margin: 0;
        padding: 0;
        width: 70%;

        blockquote {
            margin: 0;
            text-align: left;
            font-size: 1.5rem;
            color: #212929;

            p {
                margin: 0;
                margin-bottom: 0.25rem;
            }
        }
        figcaption {
            font-style: italic;
            color: #566d6d;
        }
    }
`;
