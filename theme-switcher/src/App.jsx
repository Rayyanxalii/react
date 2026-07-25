import { ThemeProvider } from './Context/theme'
import { useEffect, useState } from 'react'
import Button from './Components/Button'
import Card from './Components/Card'

function App() {

  const [theme, settheme] = useState('light');

  const dark = () => {
    settheme('dark');
  }

  const light = () => {
    settheme('light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  }, [theme])



  return (

    <ThemeProvider value={{ theme, dark, light }}>
      <div className="flex flex-wrap min-h-screen items-center text-base bg-white dark:bg-gray-900">
        <div className="w-full">
          <div className="w-64 mx-auto flex justify-end mb-4">
            <Button />
          </div>

          <div className="w-64 mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
