import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header: FC = () => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    <div className="Logo">
                        <h2>Great Quotes</h2>
                    </div>
                    <Navigation>
                        <ul>
                            <li>
                                <NavLink activeClassName="active" to="/quotes">
                                    All Quotes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/new-quote"
                                >
                                    Add Quote
                                </NavLink>
                            </li>
                        </ul>
                    </Navigation>
                </Inner>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    width: 100%;
    padding: 0.675rem 0;
`;
const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Navigation = styled.nav`
    ul {
        display: flex;
        margin: 0;
        li {
            list-style: none;
            margin-left: 1rem;

            a {
                text-decoration: none;
                padding: 0.5rem;
                color: var(--dark);
                font-size: 1rem;
            }
            .active {
                border-bottom: 3px solid var(--primary);
            }
        }
    }
`;
