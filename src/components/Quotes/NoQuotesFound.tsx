import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NoQuotesFound = () => {
    return (
        <Wrapper>
            <p className="text-danger">No quotes found!</p>
            <Link className="Button" to="/new-quote">
                Add a Quote
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 20rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #262c2c;
        font-size: 3rem;
        font-weight: bold;
    }
`;
