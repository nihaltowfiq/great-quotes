import { FC } from 'react';
import { useParams } from 'react-router';

export const Comments: FC = () => {
    const { quoteId } = useParams<{ quoteId?: string }>();
    return <div>Comments {quoteId}</div>;
};
