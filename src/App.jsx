import { useState } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {

  const [entries, setentries] = useState([
    {
      id: 1,
      title: "First Day Using My Diary",
      content: "Today I started building my personal diary project using React and Tailwind.",
      date: "2026-02-18",
    },
    {
      id: 2,
      title: "Learning React State",
      content: "Understanding how useState works and how to strucutre components properly.",
      date: "2026-02-19",
    }
  ])

  return (
    <div className='min-h-screen bg-base-200'>
      <Header />
      <Home entries={entries} />
    </div>
  )
}

export default App