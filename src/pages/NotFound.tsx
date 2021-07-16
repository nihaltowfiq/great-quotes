import { FC } from 'react';
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

export const NotFound: FC = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: '100vh' }}
        >
            <Wrapper>
                <h3 className="Title">OOPS!</h3>
                <h5 className="Subtitle">404 - PAGE NOT FOUND </h5>
                <Button size="lg" variant="outline-dark">
                    GO TO HOMEPAGE
                </Button>
            </Wrapper>
        </Container>
    );
};

const Wrapper = styled.div`
    text-align: center;
    .Title {
        margin-bottom: 0;
        color: var(--danger);
        font-size: 8rem;
        font-weight: 800;
    }
    .Subtitle {
        font-size: 1.5rem;
        font-weight: 600;
    }
`;
