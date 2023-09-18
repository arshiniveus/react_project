import { useState } from 'react';
import './App.css';

function App () {

  let [ count, setCount ] = useState(1)

  const addValue = () => {
    if (count >= 1 && count < 20) {
      count = count + 1
      setCount(count)
      console.log("clicked", count);
    }
  }
  const removeValue = () => {
    if (count > 0) {
      count = count - 1
      setCount(count)
      console.log("clicked", count);
    }


  }
  return (

    <div >
      <button onClick={addValue}> + </button>
      <h5> Count {count}</h5>
      <button onClick={removeValue}> - </button>
    </div>
  );
}

export default App;
