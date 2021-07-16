import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AllQuotes, NewQuote, QuoteDetail } from './pages';

const App: FC = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/quotes" />
            <Route exact path="/quotes" component={AllQuotes} />
            <Route path="/quotes/:quoteId" component={QuoteDetail} />
            <Route path="/add-quote" component={NewQuote} />
        </Switch>
    );
};

export default App;
