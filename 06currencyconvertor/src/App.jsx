import { useState } from 'react'
import './App.css'
import InputBox from './components/index.js'
import useCurrencyInfo from './hooks/usecurrencyinfo.js'


function App() {

  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState('USD');
  const [to, setto] = useState('PKR');
  const [convertedamount, setconvertedamount] = useState(0);


  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setfrom(to);
    setto(from);
    setamount(convertedamount);
    setconvertedamount(amount);
  }

  const finalconvert = () => {
    setconvertedamount(amount * currencyInfo[to]);
  }


  return (
    <div
      className="fixed inset-0 w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6H4L706mb9gRIKswI4t4e1Z6pV4WBZfkNw&s')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              finalconvert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyoption={options}
                onAmountChange={(amount) => setamount(amount)}
                onCurrencyChange={(currency) => setfrom(currency)}
                selectcurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedamount}
                currencyoption={options}
                onCurrencyChange={(currency) => setto(currency)}
                selectcurrency={to}
                amountdisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
