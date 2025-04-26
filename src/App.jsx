import { useState } from 'react'
import Component from "./Component.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600">¡Tailwind está funcionando!</h1>
        </div>

        <Component />
    </>
  )
}

export default App
