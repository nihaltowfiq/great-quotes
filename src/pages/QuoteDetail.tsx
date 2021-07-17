import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { SingleQuote } from '../components';
import { DUMMY_DATA } from '../data';

export const QuoteDetail: FC = () => {
    const { quoteId } = useParams<{ quoteId?: string }>();
    if (quoteId) {
        const data = getDetail(quoteId);
        if (data) {
            return <SingleQuote data={data} />;
        }
        return (
            <h3 className="mt-5 text-danger text-center">
                Sorry! data not found.
            </h3>
        );
    }
    return null;
};

const getDetail = (quoteID: string) => {
    const data = DUMMY_DATA.find(({ id }) => parseInt(quoteID) === id);
    return data;
};
