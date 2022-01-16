import './App.css';
import DeliveryCalculator from './calculator/DeliveryCalculator';
import Wolt from './assets/Wolt.png';

console.log(Wolt);

function App() {
  return (
    <main>
      <div className="logo">
        <img src={Wolt} alt="logo" />;
      </div>
      <div className='container mt-2'>
        <h1>Delivery Fee Calculator</h1>
        <div className='col-lg-4 col-offset-6'>
          <DeliveryCalculator />
        </div>
      </div>
    </main>
  )
}

export default App
