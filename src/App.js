import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/comics">
            <List />
          </Route>
          <Route path="/comics/detail">
            <Detail />
          </Route>
          <Route path="/videos">
          </Route>
          <Route path="/videos/detail">
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;