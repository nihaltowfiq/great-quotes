import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const QuoteDetail: FC = () => {
    const { quoteId } = useParams<{ quoteId?: string }>();

    console.log(quoteId);

    return <div>quote detail! {quoteId} </div>;
};
