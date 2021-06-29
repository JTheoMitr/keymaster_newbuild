import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ScalesContainer from './components/ScalesContainer'
import About from './components/About'
import Contact from './components/Contact'
import Form from './components/Form'
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        < NavBar />
        <br></br>
        <Route exact path="/scales" component={ScalesContainer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/scales/new" component={Form} />
      </div>
    </Router>
  );
}

export default App;
