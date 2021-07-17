import { FC } from 'react';
import styled from 'styled-components';
import { DUMMY_DATA } from '../../data';
import { QuoteItem } from './QuoteItem';

export const QuoteList: FC<PropsType> = ({ data }) => {
    return (
        <List>
            {data.map((quote, i) => (
                <QuoteItem key={i} data={quote} />
            ))}
        </List>
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
