import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const QuoteDetail: FC = () => {
    const params = useParams<any>();

    console.log(params.quoteId);

    return <div>quote detail!</div>;
};
