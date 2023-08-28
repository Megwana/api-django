import logo from './logo.svg';
import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/profile" render={() => <h1>Profile Page</h1>} />
          <Route exact path="/posts" render={() => <h1>Posts</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign In</h1>} />
          <Route exact path="/register" render={() => <h1>Register</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;