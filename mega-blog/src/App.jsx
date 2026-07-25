import './App.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authslice'
import { Header, Footer } from './components'

function App() {

  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    authService.getCurrentUser().then((user) => {
      if (user) {
        dispatch(login({ UserData: user }))
      } else {
        dispatch(logout())
      }
    }).finally(() => setloading(false));
  })


  return !loading ? (<div className='min-h-screen flex items-center justify-center bg-gray-500'>

    <div>
      <Header />

      <main>
        {/* <Outlet /> */}
      </main>

      <Footer />
    </div>
  </div>)

    : (null)
}

export default App
