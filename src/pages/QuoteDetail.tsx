import { FC, Fragment, useEffect } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import { LoadComment, LoadingSpinner, SingleQuote } from '../components';
import { getSingleQuote, useHttp } from '../libs';
import { Comments } from './Comments';

export const QuoteDetail: FC = () => {
    const { quoteId } = useParams<{ quoteId?: string }>();
    const { path, url } = useRouteMatch();
    const { sendRequest, data, error, status } = useHttp(getSingleQuote);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

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
    if (!data?.text) {
        return (
            <h3 className="mt-5 text-danger text-center">
                Sorry! quote not found.
            </h3>
        );
    }
    return (
        <Fragment>
            <SingleQuote data={data} />
            <Route
                exact
                path={url}
                render={() => <LoadComment path={`${url}/comments`} />}
            />
            <Route path={`${path}/comments`} component={Comments} />
        </Fragment>
    );
};
