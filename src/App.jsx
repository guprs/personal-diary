import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-base-200 flex items-center justify-center px-4'>
      <div className='text-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>Personal Diary</h1>
        <p className='mt-4 text-sm sm:text-base md:text-lg'>Your personal space to write daily thoughts.</p>
      </div>
    </div>
  )
}

export default App