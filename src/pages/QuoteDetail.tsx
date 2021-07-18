import { FC, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { Route, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { SingleQuote } from '../components';
import { DUMMY_DATA } from '../data';
import { Comments } from './Comments';

const getDetail = (quoteID: string) => {
    const data = DUMMY_DATA.find(({ id }) => parseInt(quoteID) === id);
    return data;
};

export const QuoteDetail: FC = () => {
    const { quoteId } = useParams<{ quoteId?: string }>();
    const { path, url } = useRouteMatch();

    console.log({ path }, { url });

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
        return (
            <h3 className="mt-5 text-danger text-center">
                Sorry! data not found.
            </h3>
        );
    }
    return null;
};

const LoadComment: FC<{ path: string }> = ({ path }) => {
    const history = useHistory();
    return (
        <div className="text-center mx-auto">
            <Button
                size="lg"
                variant="warning"
                className="font-weight-semibold"
                onClick={() => history.push(path)}
            >
                Load Comments...
            </Button>
        </div>
    );
};
