import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(89);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function laske(e) {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    let bloodAlcohol = 0;

    if (gender === 'male') {
      bloodAlcohol = gramsLeft / (weight *  0.7);
    }

    if (gender === 'female') {
      bloodAlcohol = gramsLeft / (weight * 0.6);
    }

    if (bloodAlcohol < 0) {
      bloodAlcohol = 0;
    }

    setResult(bloodAlcohol);
  }

  return (
    <div style = {{margin: '30px'}}>
      <form onSubmit={laske}>
        <h3>Alcometer</h3>
          <div>
            <label>Weight</label>
            <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
          </div>
          <div>
            <label>Bottles</label>
            <select name="bottles" value={bottles} onChange = {e => setBottles(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div>
            <label>Time</label>
            <select name="time" value={time} onChange = {e => setTime(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div>
            <label>Gender </label>
              <label for="male">Male</label>
              <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input>
              <label for="female">Female</label>
              <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>
          </div>
          <div>
            <output>{result.toFixed(1)}</output>
          </div>
          <button>Calculate</button>
        </form>
    </div>
  );
}

export default App;
