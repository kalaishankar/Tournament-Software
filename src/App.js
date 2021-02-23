
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Tab from './Components/Tab/Tab';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  return(
    <Router>
  <div className="app">
  <Sidebar />
  <Tab />
  <Header />
  <Switch>
 <Route path='/' />
  </Switch>
  </div>
  </Router>
  );
  }


export default App;
