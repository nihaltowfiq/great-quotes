import { FC, Fragment } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import { LoadComment, SingleQuote } from '../components';
import { DUMMY_DATA } from '../data';
import { Comments } from './Comments';

const getDetail = (quoteID: string) => {
    const data = DUMMY_DATA.find(({ id }) => parseInt(quoteID) === id);
    return data;
};

export const QuoteDetail: FC = () => {
    const { quoteId } = useParams<{ quoteId?: string }>();
    const { path, url } = useRouteMatch();

    if (quoteId) {
        const data = getDetail(quoteId);
        if (data) {
            return (
                <Fragment>
                    <SingleQuote data={data} />
                    <Route
                        exact
                        path={`${url}`}
                        render={() => <LoadComment path={`${url}/comments`} />}
                    />
                    <Route path={`${path}/comments`} component={Comments} />
                </Fragment>
            );
        }
    }
    return (
        <h3 className="mt-5 text-danger text-center">Sorry! data not found.</h3>
    );
};
