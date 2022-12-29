import './App.module.css';
import {useState} from "react";
import classes from "./App.module.css";

//funkcja wyliczająca wartość wyrazu ciągu Fibonacciego o zadanym numerze
let fibonacci = (num) => {
    let a = 0;
    let b = 1;
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        sum = a + b;
        a = b;
        b = sum;
    };
    return num ? b : a;
};

function App() {
  const [result, setResult] = useState();
  const [number, setNumber] = useState(); //wartość początkowa ustawiona jest w formularzu na 0

    //po naciśnięciu "submit" wykona się funkcja fibonacci i przypisze rezultat do zmiennej "result"
    const submitHandler = (e) => {
        e.preventDefault();
        setResult(fibonacci(number));
    }

  return (
    <div className={classes.content}>
      FibCalc <br></br>
      Agata Wrześniewska<br></br>
      Grupa I2S 1.5<br></br>
      <form onSubmit={submitHandler}>
        <label>
          Podaj numer wyrazu ciągu Fibonacciego:
          <input type="number" defaultValue="0" min = "0" name='number' id='number' onChange={e => setNumber(e.target.value)}/>
        </label>
        <input type="submit" value="Sprawdź" />
      </form>
      <div id={"container"}>
        Wartość wyrazu: {result}
      </div>
    </div>
  );
}

export default App;
