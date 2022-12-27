import './App.module.css';
import {useState} from "react";
import classes from "./App.module.css";

//funkcja wyliczająca wartość wyrazu ciągu Fibonacciego o zadanym numerze
const fibonacci = (num = 1) => {
    const series = [1, 1];
    for (let i = 2; i < num; i++) {
        const a = series[i - 1];
        const b = series[i - 2];
        series.push(a + b);
    };
    return series[num - 1];
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
      FibCalc
      Agata Wrześniewska
      Grupa I2S 1.5
      <form onSubmit={submitHandler}>
        <label>
          Podaj numer wyrazu ciągu Fibonacciego:
          <input type="number" defaultValue="0" min = "0" name='number' id='number' onChange={e => setNumber(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div id={"container"}>
        Wartość wyrazu: {result}
      </div>
    </div>
  );
}

export default App;
