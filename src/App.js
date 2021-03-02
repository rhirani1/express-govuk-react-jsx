import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Template } from 'govuk-react-jsx';

import Home from './pages/Home';

const headerProps = {
    serviceName: 'Express GovUK React JSX',
    homepageUrlHref: 'https://www.gov.uk'
};

function App() {
    return (
        <Switch>
            <Template
                header={ headerProps }
            >
                <Helmet>
                    <title>{ headerProps.serviceName }</title>
                </Helmet>

                <Route exact path="/">
                    <Home />
                </Route>

            </Template>
        </Switch>
    );
}

export default App;