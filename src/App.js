import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
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
          <Route exact path="/comics">
            <List />
          </Route>
          <Route path="/comics/detail">
            <Detail />
          </Route>
          <Route exact path="/movies">
            <List />
          </Route>
          <Route path="/movies/detail">
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;