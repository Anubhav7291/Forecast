
import Home1 from './Home1';
import '../style/style.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import '../style/queries.css';

const App = () => {
 
    return (
        <div>
         
          <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/search' exact component={Search}></Route>
          </BrowserRouter>
        </div>
    );
};

export default App;