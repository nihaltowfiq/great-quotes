import { FC } from 'react';
import { QuoteList } from '../components';
import { DUMMY_DATA } from '../data';

export const AllQuotes: FC = () => {
    return <QuoteList data={DUMMY_DATA} />;
};
