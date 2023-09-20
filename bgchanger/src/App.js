import { useState } from "react";
import './App.css';

function App () {
  const [ color, setColor ] = useState('')

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className="fixed flex  my-4 flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="fixed flex flex-wrap justify-center gap-3 px-3 py-2   rounded-2xl shadow-lg bg-white">
          <button className="px-3 py-1 rounded-full text-white" style={{ backgroundColor: "red" }} onClick={() => {
            setColor("red")
          }}> red </button>
          <button className="px-3 py-1 rounded-full text-white" style={{ backgroundColor: "green" }} onClick={() => {
            setColor("green")
          }}> green </button>
          <button className="px-3 py-1 rounded-full text-white" style={{ backgroundColor: "yellow" }} onClick={() => {
            setColor("yellow")
          }}> yellow </button>
          <button className="px-3 py-1 rounded-full text-white" style={{ backgroundColor: "black" }} onClick={() => {
            setColor("black")
          }}> black </button>
        </div>
      </div>
    </div>
  );
}

export default App;
