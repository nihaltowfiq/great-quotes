import { FC, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './Header';

export const MainLayout: FC = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main>
                <Container>{children}</Container>
            </main>
        </Fragment>
    );
};
