import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './components/Home';
import Service from './pages/Service';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <div className='content'>
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/service" exact component={Service} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
