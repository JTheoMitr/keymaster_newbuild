import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ScalesContainer from './components/ScalesContainer'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Resources from './components/Resources'

function App() {
  return (
    
      <div className="basicStyling">

        <Router>

          < NavBar />

          <Switch>
          
        
          <Route path="/scales" component={(routeInfo) => <ScalesContainer routeData={routeInfo} />} />

          <Route path="/about">
              <About />
            </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/resources">
            <Resources />
          </Route>

          </Switch>
        
        </Router>
        
      </div>
    
  );
}

export default App;
