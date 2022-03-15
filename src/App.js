import './App.css';
import ComboBox from './ComboBox';

function App() {
  const fruits = [
    '🍎 Apple',
    '🍌 Banana',
    '🫐 Blueberry',
    '🥭 Mango'
  ];

  return (
    <div className='container'>
      <h1>Combo Box</h1>
      <ComboBox fruits={fruits} />
    </div>
  );
}

export default App;
