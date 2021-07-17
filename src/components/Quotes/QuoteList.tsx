import { FC, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { DUMMY_DATA } from '../../data';
import { QuoteItem } from './QuoteItem';

const sortQuotes = (
    quotes: typeof DUMMY_DATA,
    ascending: boolean
): typeof DUMMY_DATA => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};

export const QuoteList: FC<PropsType> = ({ data }) => {
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isSortingAscending = queryParams.get('sort') === 'asc';
    const sortingHandler = () => {
        history.push(`/quotes?sort=${isSortingAscending ? 'desc' : 'asc'}`);
    };
    const sortedQuotes = sortQuotes(data, isSortingAscending);

    return (
        <Fragment>
            <Sorting>
                <Button
                    variant="outline-primary"
                    className="text-dark font-weight-semibold"
                    onClick={sortingHandler}
                >
                    Sort {isSortingAscending ? 'Descending' : 'Ascending'}
                </Button>
            </Sorting>
            <List>
                {sortedQuotes.map((quote, i) => (
                    <QuoteItem key={i} data={quote} />
                ))}
            </List>
        </Fragment>
    );
};

interface PropsType {
    data: typeof DUMMY_DATA;
}

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const Sorting = styled.div`
    width: 40rem;
    margin: auto;
    padding-bottom: 1rem;
    border-bottom: 3px solid #b2d4d4;
    margin-bottom: 1rem;

    button {
        &:hover {
            color: white !important;
        }
    }
`;
