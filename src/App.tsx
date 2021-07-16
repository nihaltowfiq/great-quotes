import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MainLayout } from './components';
import { AllQuotes, Comments, NewQuote, NotFound, QuoteDetail } from './pages';

const App: FC = () => {
    return (
        <MainLayout>
            <Switch>
                <Redirect exact from="/" to="/quotes" />
                <Route exact path="/quotes" component={AllQuotes} />
                <Route exact path="/quotes/:quoteId" component={QuoteDetail} />
                <Route path="/quotes/:quoteId/comments" component={Comments} />
                <Route path="/new-quote" component={NewQuote} />
                <Route path="*" component={NotFound} />
            </Switch>
        </MainLayout>
    );
};

export default App;
