import { useState, useEffect } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import NewEntryForm from "./components/NewEntryForm"

function App() {
  //initialize entries from localStorage + uses lazy initialization to avoid reading storage on every render
  const [entries, setEntries] = useState(() => {
    const storedEntries = localStorage.getItem("diaryEntries")
    return storedEntries ? JSON.parse(storedEntries) : []
  })

  //controls forms visibility
  const [isCreating, setIsCreating] = useState(false)

  //sync entries state with localStorage + runs every time entries change
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries))
  }, [entries])

  // adds a new entry to the state + generates uuid and current date
  const addEntry = (title, content) => {
    const newEntry = {
      id: crypto.randomUUID(),
      title,
      content,
      date: new Date().toISOString().split("T")[0],
    }
    setEntries((prevEntries) => [newEntry, ...prevEntries])
    setIsCreating(false) //hide form after saving
  }

  return (
    <div className='min-h-screen bg-base-200'>

      <Header onNewClick={() => setIsCreating(true)} />

      {isCreating && (<NewEntryForm addEntry={addEntry} onCancel={() => setIsCreating(false)} />)}

      <Home entries={entries} />
    </div>
  )
}

export default App