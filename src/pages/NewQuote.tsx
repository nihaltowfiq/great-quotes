import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { QuoteForm } from '../components';
import { addQuote } from '../libs/api';
import { useHttp } from '../libs/hooks';

export const NewQuote: FC = () => {
    const history = useHistory();
    const { sendRequest, status } = useHttp(addQuote);

    useEffect(() => {
        if (status === 'completed') history.push('/quotes');
    }, [status, history]);

    const handleAddQuote = (quote: { author: string; text: string }) => {
        sendRequest(quote);
    };
    return (
        <QuoteForm
            isLoading={status === 'pending'}
            onAddQuote={handleAddQuote}
        />
    );
};
