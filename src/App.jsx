import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Controls from './components/Controls';
import CountriesList from './components/CountriesList';
import Layout from './components/Layout';
import SingleCountryPage from './pages/SingleCountryPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Controls />
            <CountriesList />
          </Route>
          <Route exact path="/:name">
            <SingleCountryPage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
