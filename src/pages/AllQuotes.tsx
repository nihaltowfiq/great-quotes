import { FC, useEffect } from 'react';
import { LoadingSpinner, NoQuotesFound, QuoteList } from '../components';
import { getAllQuotes, useHttp } from '../libs';

export const AllQuotes: FC = () => {
    const { sendRequest, data, error, status } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }
    if (error) {
        return <p className="centered focused">{error}</p>;
    }
    if (status === 'completed' && (!data || data.length === 0)) {
        return <NoQuotesFound />;
    }

    return <QuoteList data={data} />;
};
