import './App.css';
import Header from './components/Header';
import { useSelector, useDispatch } from 'react-redux'
import { increment, isLogged } from './actions/index.js'


function App() {
  const counter = useSelector(state => state.counter)
  const isLoged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
        <Header />
        <hr />
        <button onClick={() => dispatch(increment())}>+</button>
        <h1>Counter {counter}</h1>
        <h3>{isLoged ? 'Valuable informwation I shouldnt see' : ''}</h3>

        <h6><button onClick={() => dispatch(isLogged())}>LOGOUT</button></h6>
    </div>
  );
}

export default App;
