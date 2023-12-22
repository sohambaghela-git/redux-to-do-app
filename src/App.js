import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementNumber, decrementNumber } from './redux/actions/index';
function App() {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className='container'>
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React & Redux</h4>
        <div className='quantity'>
          <a className='quantity__minus' title='Decrement' onClick={()=>dispatch(decrementNumber())}><span>-</span></a>
          <input name='quantity' type='text' className='quantity__input' value={myState} />
          <a className='quantity__plus' title='Increment' onClick={()=>dispatch(incrementNumber())}><span>+</span></a>
        </div>
      </div>
    </div>
  );
}

export default App;
