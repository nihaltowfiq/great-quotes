import { FC } from 'react';
import { QuoteForm } from '../components';

export const NewQuote: FC = () => {
    const handleAddQuote = (quote: { author: string; text: string }) => {
        console.log(quote);
    };
    return <QuoteForm isLoading={false} onAddQuote={handleAddQuote} />;
};
