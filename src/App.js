import './App.css';
import Counter from './compenent/Counter';
import DecreaseCounter from './compenent/DecreaseCounter';
import IncreaseByTwoCounter from './compenent/IncreaseByTwoCounter';
import IncreaseCounter from './compenent/IncreaseCounter';

function App() {
  return (
    <div>
      <Counter/>
        <IncreaseCounter/>
        <DecreaseCounter/>
        <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
