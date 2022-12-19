import { useState } from 'react'
import reactLogo from './assets/react.svg'
import QuoteBox from './components/QuoteBox'

import './style.css'

function App() {
  const [count, setCount] = useState(0)




  return (
    <div className="App">
      <QuoteBox/>
    </div>
  )
}

export default App
