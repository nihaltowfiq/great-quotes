import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { QuoteForm } from '../components';

export const NewQuote: FC = () => {
    const history = useHistory();
    const handleAddQuote = (quote: { author: string; text: string }) => {
        console.log(quote);
        history.push('/quotes');
    };
    return <QuoteForm isLoading={false} onAddQuote={handleAddQuote} />;
};
