import React from 'react';
import { Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.componant';


const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>

)


function App() {
    return <div>
       <Route exact path='/' component={HomePage} />
       <Route path='/hats/shop/' component={HatsPage} />
    </div>
}

export default App;
