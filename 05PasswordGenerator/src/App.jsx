import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password,setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
     let pass = '';
     let str = 'ABCDEFGHIJKLMNOOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
     if(number) str += '0123456789';
     if(specialChar) str += '!@#$%^&*()_+=-{}[]\:;"\'<>,.?/~`';

     for(let i=1; i<length; i++){
      const char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char)
     }

     setPassword(pass);

  }, [length, number, specialChar]
 )
 
  useEffect(()=> {
    generatePassword();
  }, [length, number, specialChar])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
 
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type = 'text'
        value= {password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly = {true}
        ref={passwordRef}
        />
        <button 
        onClick = {copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex itemas-center gap-x-1'>
          <input 
            type='range' 
            name="" 
            id=''
            min={6} 
            max={100} 
            value={length}
            className='cursor-pointer'
            onChange={(e)=> setLength(e.target.value)}
            />
            <label htmlFor = "length">Length: {length-1}  </label>
        </div>

        <div className='flex itemas-center gap-x-1'>
          <input 
            type="checkbox" 
            name='' 
            id=''
            defaultChecked= {number}
            onChange={() => setNumber((prev)=> !prev
            )} 
          /> <label htmlFor="numbers">Numbers</label>
        </div>
        <div className='flex itemas-center gap-x-1'>
          <input 
            type="checkbox" 
            name='' 
            id=''
            defaultChecked= {specialChar}
            onChange={() => setSpecialChar((prev)=> !prev
            )} 
          /> <label htmlFor="numbers">Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App;
