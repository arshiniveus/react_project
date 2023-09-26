import { useState, useCallback, useEffect, useRef } from "react";
import './App.css';

function App () {
  const [ length, setLength ] = useState(8);
  const [ charAllowed, setcharAllowed ] = useState(false);
  const [ num, setNum ] = useState(false);
  const [ pass, setPass ] = useState("");

  const passRef = useRef(null)

  console.log(num);
  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz"

    if (num) str += "123456789"
    if (charAllowed) str += "+-(){}*&%$#@!~`[]"

    for (let i = 1; i <= length; i++) {
      let randChar = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(randChar)
    }
    setPass(pass)

  }, [ length, charAllowed, num, setPass ])

  const copyToclipboard = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(pass);
  }, [ pass ])

  useEffect(() => { passGenerator() }, [ length, charAllowed, num, passGenerator ])

  return (
    <>
      <h4 className="heading">Password generator</h4>
      <div className="passbox ">
        <input type="text"
          value={pass}
          placeholder="random password"
          style={{ width: "80%", height: 40, borderRadius: "5px" }}
          ref={passRef}
          readOnly
        />
        <button style={{ width: "10%", height: 45, borderRadius: "5px", backgroundColor: "blue", color: "white" }} onClick={copyToclipboard}  >copy</button>

        <div className="container">
          <div >
            <input type="range" min={6} max={100} value={length} onChange={(e) => {
              setLength(e.target.value)
            }} readOnly />
            <label >length:{length}</label>


          </div>
          <div>
            <input type="checkbox" defaultChecked={num} onChange={() => { setNum((prev) => !prev) }} />
            <label >number</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => { setcharAllowed((prevchar) => !prevchar) }} />
            <label >character</label>
          </div>


        </div>

      </div>



    </>

  );

}

export default App;
