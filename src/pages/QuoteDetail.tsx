import { FC, Fragment } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import { SingleQuote } from '../components';
import { DUMMY_DATA } from '../data';
import { Comments } from './Comments';

const getDetail = (quoteID: string) => {
    const data = DUMMY_DATA.find(({ id }) => parseInt(quoteID) === id);
    return data;
};

export const QuoteDetail: FC = () => {
    const { quoteId } = useParams<{ quoteId?: string }>();
    const match = useRouteMatch();

    console.log(match);

    if (quoteId) {
        const data = getDetail(quoteId);
        if (data) {
            return (
                <Fragment>
                    <SingleQuote data={data} />
                    <Route
                        path={`/quotes/${quoteId}`}
                        render={() => <LoadComment quoteId={quoteId} />}
                    />
                    <Route
                        path={`${match.path}/comments`}
                        component={Comments}
                    />
                </Fragment>
            );
        }
        return (
            <h3 className="mt-5 text-danger text-center">
                Sorry! data not found.
            </h3>
        );
    }
    return null;
};

const LoadComment: FC<{ quoteId: string }> = ({ quoteId }) => (
    <div className="text-center mx-auto">
        <Link to={`/quotes/${quoteId}/comments`}>Load Comments...</Link>
    </div>
);
