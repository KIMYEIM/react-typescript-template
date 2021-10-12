import React, { MutableRefObject, useRef } from 'react';
import Input from './InputRef';

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <Input ref={inputRef}/>
      <button onClick={()=> inputRef.current?.focus()}>Focus</button>
    </>
  )
}

export default App;