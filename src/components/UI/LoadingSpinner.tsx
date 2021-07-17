import styled, { keyframes } from 'styled-components';

export const LoadingSpinner = () => {
    return <Spinner />;
};

const SpinnerAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
const Spinner = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid teal;
        border-color: teal transparent teal transparent;
        animation: ${SpinnerAnimation} 1.2s linear infinite;
    }
`;
