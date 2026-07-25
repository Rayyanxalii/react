import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setlength] = useState(8);
  const [numpassword, setnumpassword] = useState(false);
  const [specialpassword, setspecialpassword] = useState(false);
  const [password, setpassword] = useState("")

  const passwordgenerator = useCallback(function () {
    let password = ""
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numpassword) charset += "0123456789"
    if (specialpassword) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-="
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setpassword(password);

  }, [length, numpassword, specialpassword, setpassword]);


  useEffect(() => {
    passwordgenerator();
  }, [length, numpassword, specialpassword, passwordgenerator])

  // use Ref hook
  const passref = useRef(null);

  const copypasstoclipboard = useCallback(() => {
    passref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center'>
        <div className='w-full max-w-md shadow-md rounded-lg px-4 py-8 text-white-500 bg-gray-600 '>
          <h1 className='text-center text-2xl mb-4 text-white'>Password Generator</h1>

          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type="text"
              value={password}
              placeholder='password'
              readOnly
              className='w-full px-4 py-3 outline-none bg-white text-gray-800'
              ref={passref}
            />

            <button className='outline-none bg-blue-400 text-white px-3 py-0 shrink-0' onClick={copypasstoclipboard}>
              copy
            </button>

          </div>
          <div className='flex text-sm gap-x-2'>

            <div className='flex items-center gap-x-1'>

              <input type="range" min={6} max={50} value={length} className='cursor-pointer' onChange={(e) => { setlength(e.target.value) }} />
              <label>Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type="checkbox" value={numpassword} id='numberallowed' onChange={() => {
                setnumpassword((prev) => !prev)
              }} />
              <label>Numbers Allowed</label>

            </div>

            <div>
              <div className='flex items-center gap-x-1'>
                <input type="checkbox" value={specialpassword} id='charactersallowed' onChange={() => {
                  setspecialpassword((prev) => !prev)
                }} />
                <label>Characters Allowed</label>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
