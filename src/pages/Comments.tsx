import { FC } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const Comments: FC = () => {
    return (
        <Wrapper>
            <h3>User Comments</h3>
            <Button size="lg" className="my-2">
                Add a Comment
            </Button>
            <p>Comments</p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 40rem;
    margin: auto;
    text-align: center;
`;
