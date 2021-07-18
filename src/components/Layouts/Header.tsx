import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header: FC = () => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    <div className="Logo">
                        <Link to="/">
                            <h2>Great Quotes</h2>
                        </Link>
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
    box-shadow: 0px 0px 50px 10px rgba(250, 215, 70, 0.75);
`;
const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .Logo {
        a {
            text-decoration: none;
            color: var(--dark);
        }
    }
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
                color: var(--secondary);
                font-size: 1rem;

                &:hover {
                    color: var(--dark);
                }
            }
            .active {
                color: var(--dark);
                border-bottom: 4px solid var(--primary);
            }
        }
    }
`;
